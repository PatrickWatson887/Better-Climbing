import Image from 'next/image'
import Link from 'next/link'
import { Coach } from 'types/features'
import { Ratings } from './ratings'
import { Icon } from '@iconify/react'
import chevronRight from '@iconify/icons-mdi/chevron-right'
import { twMerge } from 'tailwind-merge'

const BASE_OUTER_CLASSES = `relative h-full max-w-md w-80 before:absolute before:inset-0 before:transition-transform before:border before:shadow-lg before:bg-slate-50 before:border-slate-300 before:rounded-xl before:hover:scale-105 before:hover:shadow-sky-600/20`

type CoachCardProps = Coach &
  React.HTMLAttributes<HTMLDivElement> & {
    deferred?: any[]
  }

export const CoachCard = ({
  coachId,
  profileSrc,
  name,
  location,
  rating,
  tags,
  header,
  body,
  ...deferred
}: CoachCardProps) => {
  const { className, ...rest } = deferred
  if (!coachId) return null

  return (
    <figure className={twMerge(BASE_OUTER_CLASSES, className)} {...rest}>
      <div className='relative flex flex-col'>
        <Link href={{
            pathname: '/coaches/[id]',
            query: {
              id: coachId.toString()
            }
        }}>
          <a className='relative flex items-center px-10 py-5 group divider-b before:absolute before:inset-px before:bottom-0 before:origin-bottom before:scale-x-105 before:rounded-t-lg before:bg-transparent before:hover:bg-blue-100/50 before:transition-colors before:duration-300'>
            <div className='relative w-[5.5rem] h-[5.5rem] min-w-[5.5rem] min-h-[5.5rem] overflow-hidden rounded-full'>
              <Image
                src={profileSrc}
                alt='Profile picture'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='relative flex flex-col flex-grow pl-6'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <Icon
                  icon={chevronRight}
                  className='mt-1 ml-4 transition-colors group-hover:text-blue-500 shrink-0'
                />
              </div>
              <div className='pb-1 font-medium'>{location}</div>
              <Ratings rating={rating} />
            </div>
          </a>
        </Link>
        <div className='px-10 py-5'>
          <div className='pb-2 font-semibold'>{header}</div>
          <div>{body}</div>
          <div className='flex flex-wrap justify-end w-full gap-1 pt-3 text-slate-50'>
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
        </div>
      </div>
    </figure>
  )
}
