import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from 'ui/components/button'

export default function BookNow() {
  return (
    <section className='relative grid w-full py-6 max-w-7xl place-items-center divider-b'>
      <div className='w-4/5 h-[445px] grid place-items-center'>
        <div className='w-[1348px] h-[445px] absolute m-auto'>
          <Image
            layout='fill'
            src='/hex-pattern.svg'
            alt='hexagonal background pattern'
          />
        </div>
        <div className='relative w-full bg-white/75 h-40 backdrop-blur-[2px] rounded-lg overflow-hidden ring-1 ring-slate-300 grid place-items-center'>
          <div
            className='absolute left-0 top-0 bottom-0 w-[470px]'
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
            <Image
              src='/img/hero.jpg'
              alt='A climber being coached'
              layout='fill'
              objectFit='cover'
              objectPosition='top left'
            />
          </div>
          <div className='absolute z-10 text-4xl font-bold text-black lg:relative lg:left-0 left-16'>
            Book a session now
          </div>
          <Link href='/coaches' passHref>
            <LinkButton className='absolute right-16' impact='high'>
              Find a coach
            </LinkButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
