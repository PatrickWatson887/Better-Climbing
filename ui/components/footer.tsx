import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from './button'

const pages = [
  { title: 'Find a coach', href: '/' },
  { title: 'Learn', href: '/' },
  { title: 'Explore', href: '/' },
  { title: 'FAQ', href: '/' },
]

const Footer = () => (
  <footer className='fixed bottom-0 z-0 flex flex-col items-center justify-center flex-shrink-0 w-full bg-slate-50'>
    <div className='flex w-full my-12 justify-evenly 2xl:justify-between max-w-7xl'>
      <aside className='flex flex-col justify-between w-72'>
        <div>
          <div className='pb-2 font-semibold'>Working for coaches</div>
          <p className='pb-4 mb-auto'>
            Our commitment is to make coaching more accessible to climbers and
            easier to manage for coaches
          </p>
        </div>
        <div>
          <Link href='/contact' passHref>
            <LinkButton color='secondary'>Contact us</LinkButton>
          </Link>
        </div>
      </aside>
      <Image
        width={250}
        height={116}
        src='/logo-wide.svg'
        alt='Better climbing logo'
      />
      <aside className='flex flex-col justify-between w-72'>
        <div className='pb-8'>
          <div className='pb-2 font-semibold'>Navigate</div>
          <div className='grid grid-cols-2'>
            {pages.map((page) => (
              <span key={page.title} className='font-medium text-blue-800'>
                <Link href={page.href}>{page.title}</Link>
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className='pb-2 font-semibold'>Sign up to our newsletter?</div>
          <div className='flex items-stretch'>
            <div className='flex items-center flex-grow px-2 mr-2 italic rounded bg-slate-200'>
              Enter your email...
            </div>
            <Link href='/contact' passHref>
              <LinkButton size='sm' color='secondary' className='font-bold'>
                Signup
              </LinkButton>
            </Link>
          </div>
        </div>
      </aside>
    </div>
    <div className='flex my-4 text-xs font-medium uppercase text-slate-500'>
      <div className='px-4'>privacy policy</div>
      <div className='px-4'>sitemap</div>
      <div className='px-4'>copyright</div>
    </div>
  </footer>
)

export default Footer
