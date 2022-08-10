import { NextApiRequest, NextApiResponse } from 'next'
// https://github.com/stripe-samples/nextjs-typescript-react-stripe-js/blob/59372930986b6d5ab73ec70914c6d36d519c5308/pages/api/checkout_sessions/cart.ts

/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */
import { validateCartItems } from 'use-shopping-cart/utilities/serverless'

import Stripe from 'stripe'
const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Validate the cart details that were sent from the client.
      const cartItems = req.body.cart
      const inventory = req.body.items
      const line_items = validateCartItems(inventory, cartItems)
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        mode: 'payment',
        submit_type: 'pay',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US', 'GB', 'CA'],
        },
        phone_number_collection: {
          enabled: true,
        },

        line_items: line_items,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
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
