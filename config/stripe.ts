// Set your amount limits: Use float for decimal currencies and
// Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.

export const STRIPE_CONFIG = {
  CURRENCY: 'GBP',
  MIN_AMOUNT: 30.0,
  MAX_AMOUNT: 500.0,
  AMOUNT_STEP: 5.0,
}
