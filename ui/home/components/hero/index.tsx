import Link from 'next/link'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import CurrentLocation from '@iconify/icons-uil/location-point'


interface HeroProps {
  setQuery: Function
}
export default function Hero({setQuery}: HeroProps) {
  const [query, updateQuery] = useState('')


  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    updateQuery(e.currentTarget.value)
    setQuery(e.target.value);
  }

  return (
    <section className='text-gray-600 body-font w-full divider-b'>
      <div
        className='container px-5 py-24 mx-auto flex flex-wrap items-center justify-center'
        style={{
          backgroundImage: `url(/img/Hangar.png)`,
          backgroundSize: 'cover',
        }}>
        <div className='lg:w-1/2 2xl:w-1/3 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:mr-auto w-full mt-10'>
          <div className='relative flex flex-col items-start mx-auto max-w-7xl sm:text-center lg:text-left'>
            <h1 className=' text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl'>
              <span className='block text-3xl sm:text-4xl md:text-5xl'>
                Better Coaching
              </span>{' '}
              <span className='block text-transparent text-3xl sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 pb-3'>
                Better Climbing
              </span>
            </h1>
            <h2 className='text-gray-900 text-lg font-medium title-font mb-5 mt-5'>
              Find the perfect coach for you!
            </h2>
            <div className='relative mb-4'>
              <form
                className='relative h-14 mb-5 text-xl font-bold min-w-[24rem] w-full text-slate-800'
                onSubmit={(e) => {
                  e.preventDefault()
                }}>
                <input
                  id='location'
                  type='text'
                  aria-label='Search'
                  className='w-full h-full pl-5 pr-2 rounded shadow bg-slate-50 grow focus:outline-none focus:shadow-lg'
                  placeholder='Search by location, expertise, etc'
                  value={query}
                  onChange={onSearch}
                />
                <div className='absolute flex -translate-y-1/2 top-1/2 right-4'>
                  <Link
                    href={{
                      pathname: '/coaches',
                    }}>
                    <a className='relative p-3 rounded-full cursor-pointer group hover:bg-blue-100'>
                      <Icon
                        icon={CurrentLocation}
                        className='text-slate-400 group-hover:text-slate-700'
                      />
                      <div className='absolute p-2 rounded opacity-0 invisible bg-slate-900 text-slate-100 text-sm w-max top-[120%] transition-all group-hover:visible group-hover:top-[130%] left-1/2 -translate-x-1/2 group-hover:opacity-100'>
                        Use my location
                      </div>
                    </a>
                  </Link>
                </div>
              </form>{' '}
            </div>
            <div className='relative'></div>
            <Link
              href={{
                pathname: '/coaches',
              }}>
              <button className='text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
