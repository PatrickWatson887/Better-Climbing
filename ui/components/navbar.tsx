import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Icon } from '@iconify/react'
// import BC from 'public/logo.svg'
import mdiMenu from '@iconify/icons-mdi/menu'
import mdiMenuClose from '@iconify/icons-mdi/menu-close'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

type NavBarProps = {
  links: {
    name: string
    href: string
  }[]
}

export const NavBar = ({ links }: NavBarProps) => {
  const { data: session, status } = useSession()

  return (
    <div className='sticky top-0 z-40 w-screen flex items-center justify-centerflex-shrink-0 h-16 px-8 py-4 shadow-md bg-slate-100/70 backdrop-filter'>
      <div className='flex items-center justify-between w-full max-w-7xl'>
        <Link href='/' passHref>
          <a className='flex items-end'>
            {/* <BC width='30px' height='30px' /> */}
            <span className='hidden mb-px ml-4 font-extrabold tracking-widest text-slate-900 md:block whitespace-nowrap'>
              BETTER CLIMBING
            </span>
          </a>
        </Link>
        {/* Links - Visible at and above md */}
        <nav className='hidden md:block md:space-x-8'>
          {links.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className='font-medium text-gray-500 hover:text-gray-900'>
                {item.name}
              </a>
            </Link>
          ))}
          <Link href='/cart' passHref>
            <li className='block mt-4 font-sans text-gray-500 align-middle lg:inline-block lg:mt-0 lg:ml-6 hover:text-gray-900 '>
              <a href='#' role='button' className='relative flex'>
                <svg
                  className='flex-1 w-8 h-8 fill-current'
                  viewBox='0 0 24 24'>
                  <path d='M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z' />
                </svg>
              </a>
            </li>
          </Link>
        </nav>
        <nav className='hidden md:block md:space-x-8'>
          <Popover>
            <Popover.Button>
              <div className='font-medium text-blue-600 bg-blue-300 hover:text-white'>
                For Coaches
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel
                as='nav'
                className='absolute z-10 py-4 text-center transition origin-top-right transform bg-white rounded-md top-13 top-full'>
                <div className='flex flex-col px-4 gap-y-3'>
                  <a className='text-sm font-bold'>
                    Are you a qualified coach?
                  </a>
                  <Link href='/newCoaches' passHref>
                    <button className='py-1 font-medium text-white bg-blue-400 rounded-md hover:text-gray-900'>
                      Join us!
                    </button>
                  </Link>
                  {status === 'unauthenticated' ? (
                    <button
                      onClick={() => signIn()}
                      className='py-1 font-medium text-gray-500 rounded-md outline outline-1 hover:text-gray-900'>
                      Login
                    </button>
                  ) : (
                    <button
                      onClick={() => signOut()}
                      className='py-1 font-medium text-gray-500 rounded-md outline outline-1 hover:text-gray-900'>
                      Sign Out
                    </button>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </nav>
        {/* Hamburger Menu - Visible below md */}
        <DropdownMenu className='md:hidden' links={links} />
      </div>
    </div>
  )
}

type DropdownMenuProps = NavBarProps & Record<string, any>

function DropdownMenu({ links, ...delgated }: DropdownMenuProps) {
  return (
    <Popover {...delgated}>
      <Popover.Button className='inline-flex items-center p-2 text-base font-medium text-black rounded-md text-opacity-90 group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
        {({ open }) =>
          open ? (
            <Icon icon={mdiMenuClose} className='w-6 h-6' />
          ) : (
            <Icon icon={mdiMenu} className='w-6 h-6' />
          )
        }
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'>
        <Popover.Panel
          as='nav'
          className='absolute right-0 z-10 px-2 py-4 transition origin-top-right transform top-full md:hidden'>
          <div className='p-2 overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-10'>
            <div className='px-2 space-y-1'>
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'>
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href='#'
              className='block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100'>
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default NavBar
