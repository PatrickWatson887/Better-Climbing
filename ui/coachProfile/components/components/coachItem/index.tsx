import { Item } from 'types/features'
import React, { useState } from 'react'
import { Calendar } from '../calendar'
import Link from 'next/link'

type CoachItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> &
  Item & {
    profileSrc: string
    isCoach: boolean
    addItemToCart: Function
    deferred?: any[]
  }

export const CoachItem = ({
  id,
  title,
  description,
  price,
  spaces,
  spacesFilled,
  profileSrc,
  isCoach,
  type,
  addItemToCart,
  ...deferred
}: CoachItemProps) => {
  const { className, ...rest } = deferred
  const [isEditable, setEditable] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const [newPrice, setNewPrice] = useState(price)
  const [isCalendar, setCalendar] = useState(true)
  const [ style, setStyle ] = useState(0)

  const tags = [
    { title: '1-1' },
    { title: 'Bouldering' },
    { title: 'Power' },
    { title: 'Flexibility' },
  ]

  return (
    <>
      <div className='relative p-3 bg-white border rounded rounded-lg shadow-sm border-gray-300'>
        <div className='flex flex-col ml-3'>
        <span className='text-md font-medium'>Type: {type}</span>

          <div>
            <span className='text-md font-medium'>Session: </span>
            {isEditable ? (
              <input
                className='border border-2'
                defaultValue={newTitle}
                onChange={(e) => {
                  setNewTitle(e.currentTarget.value)
                }}
              />
            ) : (
              <span className='text-md font-medium text-gray-400'>
                {newTitle}
              </span>
            )}
          </div>
          <div>
            <span className='text-md font-medium'>Description: </span>
            {isEditable ? (
              <input
                className='border border-2 w-full'
                defaultValue={newDescription}
                onChange={(e) => {
                  setNewDescription(e.currentTarget.value)
                }}
              />
            ) : (
              <span className='text-md font-medium text-gray-400'>
                {newDescription}
              </span>
            )}
          </div>
          <div className='flex flex-wrap gap-1 pt-2 text-slate-50 absolute top-3 right-4'>
            {tags.map((tag, index) => (
              <Link
                href={{
                  pathname: '/coaches',
                  query: { data: tag.title },
                }}
                key={index}>
                <a className='chip'>{tag.title}</a>
              </Link>
            ))}
          </div>
          <div className='absolute bottom-3 right-4'>
            {isEditable ? (
              <input
                className='border border-2 w-full'
                defaultValue={newPrice}
                onChange={(e) => {
                  setNewPrice(+e.currentTarget.value)
                }}
              />
            ) : (
              <span className='text-2xl font-medium'>£{newPrice} </span>
            )}
          </div>
        </div>
        {isCoach ? (
          <div className='flex flex-row gap-x-2'>
            {isEditable ?
            <button
              className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white'
              onClick={() => {
                setCalendar(!isCalendar)
              }}>
              {isCalendar ? 'Text' : 'Calendar'}
            </button> : null }
          </div>
        ) : null}
        {isCalendar ? (
          <Calendar isEditable={isEditable} price={price} addItemToCart={addItemToCart}/>
        ) : (
          <div className='flex flex-col px-3'>
            <span className='text-md font-medium text-gray-400'>
              Book here to organise a time slot
            </span>
            <button
              className='bg-blue-400 rounded-md text-white w-32'
              onClick={() => {
                addItemToCart({
                  name: title,
                  id,
                  price: price * 100,
                  currency: 'GBP',
                })
              }}>
              Book Time
            </button>
          </div>
        )}
        {isCoach ? (
          <div className='flex flex-row gap-x-2'>
            <button
              className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white'
              onClick={() => {
                setEditable(!isEditable)
              }}>
              {isEditable ? 'Save' : 'Edit'}
            </button>
            <button
              className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white'
              onClick={() => {
                setEditable(!isEditable)
              }}>
              {isEditable ? 'Cancel' : 'Delete'}
            </button>
          </div>
        ) : null}
      </div>
      <div className='my-4'></div>
    </>
  )
}
