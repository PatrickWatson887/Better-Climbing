import React, { useState } from 'react'
import { CartItem } from '../cartItem'
import Link from 'next/link'
import { Product } from 'types/features'

type CheckoutScreenProps = {
  cart: any
}

export const CheckoutScreen = ({cart}: CheckoutScreenProps) => {
  const [loading, setLoading] = useState(false)
  const [cartEmpty, setCartEmpty] = useState(true)
  const [product, setProduct] = useState<Product[]>([])

  return (
    <form>
      <div className='h-screen bg-gray-300 '>
        <div className='py-12'>
          <div className='max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg md:max-w-5xl md:flex'>
            <div className='w-full p-4 px-5 py-5'>
              <div className='gap-2 md:grid md:grid-cols-2'>
                <div className='col-span-2 p-5'>
                  <h1 className='text-xl font-medium '>Shopping Cart</h1>
                  {cart.map((item) => (
                    <div key={item.id} className='p-4'>
                      <CartItem
                        id={item.id}
                        title={item.name}
                        price={item.formattedPrice}
                        profileSrc='/img/Hangar.png'
                      />
                    </div>
                  ))}
                  <div className='flex items-center justify-between pt-6 mt-6 border-t'>
                    <div className='flex items-center'>
                      <i className='pr-2 text-sm fa fa-arrow-left'></i>
                      <Link href='/coaches'>
                        <a className='font-medium text-blue-500 text-md'>
                          Continue Shopping
                        </a>
                      </Link>
                    </div>
                    <div className='flex items-center'>
                      <button
                        className='mr-4 font-medium text-blue-500 cart-style-background text-md disabled:text-slate-400'
                        type='submit'
                        disabled={cartEmpty || loading}>
                        Checkout
                      </button>
                      <span className='mr-1 text-sm font-medium text-gray-400'>
                        Subtotal:
                      </span>
                      <span className='text-lg font-bold text-gray-800 '>
                        {/* {formattedTotalPrice} */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
