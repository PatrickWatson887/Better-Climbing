import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getFeatured} from 'pages/api/coaches'
import { Coach, CoachDb } from 'types/features'
import { coachDataParser } from 'utils/coachDataParser'
import { LinkButton } from 'ui/components/button'
import { CoachCard } from 'ui/components/coach'

type FeaturedCoachesProps = React.HTMLAttributes<HTMLDivElement> & {
}


export default function FeaturedCoaches({}: FeaturedCoachesProps) {

  const [coaches, setCoaches] = useState<Coach[]>([])

  useEffect(() => {
    fetchFeaturedCoaches()
  }, [])

  const fetchFeaturedCoaches = () => {
    getFeatured()
      .then((response: any) => {
        const coaches = coachDataParser(response.data)
        setCoaches(coaches)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  return (
    <section className='relative flex flex-col items-center pt-14 pb-10 overflow-auto max-w-7xl divider-b'>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <div className='absolute w-[260px] h-[70px] -top-4 -left-10'>
          <Image
            src='/feature.svg'
            alt='Stars and hearts background'
            layout='fill'
          />
        </div>
        <span>Featured Coaches</span>
      </div>
      <div className='flex flex-wrap justify-center py-4'>
        {coaches
          .filter((coach) => coach.feature != undefined)
          .map((featureCoach) => (
            <div
              key={featureCoach.name}
              className='flex flex-col items-center p-4'>
              {featureCoach.feature?.title && (
                <div className='px-6 py-2 mb-4 text-sm transition-transform rounded-lg max-w-[20rem] bg-amber-300/50'>
                  <div className='font-semibold tracking-wider text-yellow-600 uppercase'>
                    {featureCoach.feature.title}
                  </div>
                  <div className='text-yellow-800'>
                    {featureCoach.feature.description}
                  </div>
                </div>
              )}
              <CoachCard {...featureCoach} />
            </div>
          )
        )}
      </div>
      <Link href='/coaches' passHref>
        <LinkButton impact='low'>Check out our other coaches</LinkButton>
      </Link>
    </section>
  )
}
