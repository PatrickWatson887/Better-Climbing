import Image from 'next/image'
import React from 'react'

type CartItemProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  price: number
  profileSrc: string
  deferred?: any[]
}

export const CartItem = ({
  id,
  title,
  price,
  profileSrc,
  ...deferred
}: CartItemProps) => {
  const { className, ...rest } = deferred
  // const [ currentQuantity, setQuantity ] = React.useState(quantity)

  return (
    <div
      className='flex items-center justify-between pt-6 mt-6 border-t'
      {...rest}>
      <div className='flex items-center'>
        {profileSrc && (
          <div className='relative w-[5.5rem] h-[5.5rem] min-w-[5.5rem] min-h-[5.5rem] overflow-hidden rounded-full'>
            <Image
              src={profileSrc}
              alt='Profile picture'
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}
        <div className='flex flex-col ml-3 '>
          <span className='w-auto font-medium text-md'>{title}</span>
          <span className='text-xs font-light text-gray-400'>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex pr-8'>
          <span
            className='p-3 font-semibold cursor-pointer'
            aria-disabled={!id}
            // onClick={() => {
            //   if (id) decrementItem(id)
            //   setQuantity(currentQuantity - 1)
            // }}
            >
            -
          </span>
          <div className='py-3'>
            <input
              type='text'
              className='w-8 h-6 px-2 mx-2 text-sm bg-gray-100 border rounded focus:outline-none'
              // value={currentQuantity}
              readOnly
            />
          </div>
          <span
            className='p-3 font-semibold cursor-pointer'
            aria-disabled={!id}
            onClick={() => {
              if (id == '') {
                // addItem({
                //   name: title,
                //   id: id,
                //   title: title,
                //   description: description,
                //   price: price * 100,
                //   currency: 'GBP',
                // })
                // setQuantity(currentQuantity + 1)
              }
            }}>
            +
          </span>
        </div>
        <div className='pr-8'>
          <span className='text-xs font-medium'>{price}</span>
        </div>
        <div>
          <i className='text-xs font-medium fa fa-close'></i>
        </div>
      </div>
    </div>
  )
}
