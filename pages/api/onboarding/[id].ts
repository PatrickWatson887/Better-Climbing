import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id: string = req.query.id as string
    const response = await stripe.oauth.token({
      grant_type: 'authorization_code',
      code: id,
    })
    res.status(200).json(response)
  } catch (err) {
    const message =
      typeof err === 'string'
        ? err
        : err instanceof Error
        ? err.message
        : 'Unknown error'
    res.status(500).json({ statusCode: 500, message })
  }
}
