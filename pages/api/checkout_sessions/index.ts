import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { STRIPE_CONFIG } from 'config/stripe'
import { formatAmountForStripe } from 'utils/stripeHelpers'

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const amount: number = req.body.amount
    try {
      console.log({
        amount,
        withinBounds:
          amount >= STRIPE_CONFIG.MIN_AMOUNT &&
          amount <= STRIPE_CONFIG.MAX_AMOUNT,
      })
      // Validate the amount that was passed from the client.
      if (
        !(
          amount >= STRIPE_CONFIG.MIN_AMOUNT &&
          amount <= STRIPE_CONFIG.MAX_AMOUNT
        )
      ) {
        throw new Error('Invalid amount.')
      }
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        line_items: [
          {
            name: 'Custom amount donation',
            amount: formatAmountForStripe(amount, STRIPE_CONFIG.CURRENCY),
            currency: STRIPE_CONFIG.CURRENCY,
            quantity: 1,
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      }
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      const message =
        typeof err === 'string'
          ? err
          : err instanceof Error
          ? err.message
          : 'Unknown error'
      res.status(500).json({ statusCode: 500, message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
