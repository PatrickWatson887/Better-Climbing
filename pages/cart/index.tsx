import { NextSeo } from 'next-seo'
import { NextPageWithLayout } from 'types/pages'
import { getLayout } from 'layouts/layout'
import CartComponent from 'ui/cart'

const Cart: NextPageWithLayout = () => {

  return (
    <>
      <NextSeo title='Cart | Better Coaching' />
      <CartComponent/>
    </>
  )
}

Cart.getLayout = getLayout

export default Cart
