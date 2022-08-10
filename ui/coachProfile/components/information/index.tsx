import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'


type InformationProps = React.HTMLAttributes<HTMLDivElement> & {
  coachId: number
  name: string
  location: string
  rating: number
  description: string
  tags: string
  profileSrc: string
  deferred?: any[]
}

export default function Information({
  coachId,
  name,
  location,
  rating,
  description,
  tags,
  profileSrc,
  ...deferred
}: InformationProps) {
  const { className = '', ...rest } = deferred
  const { data: session, status } = useSession()
  const isCoach = session?.roles.includes('admin') == true
  const [isDescriptionEditable, setDescriptionEditable] = useState(false)
  const [isCoachingSkillsEditable, setCoachingSkillEditable] = useState(false)

  const tabs = [
        {title: 'Indoor'},
        {title: 'Outdoor'},
        {title: 'Training plans'}
    ]

  return (

    <div className='grid grid-cols-4 bg-white'>
      <div className='p-8 ml-6'>
        <div className='relative w-[10.5rem] h-[10.5rem] min-w-[5.5rem] min-h-[5.5rem] overflow-hidden rounded-full'>
          <Image
            src='/img/Hangar.png'
            alt='Profile picture'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='flex flex-col ml-3 py-10'>
        <span className='text-2xl font-medium'>{name}</span>
        <span className='text-md font-medium'>Belfast</span>

        <span className='text-md font-medium'>Better-Climbing</span>
        <span className='text-md font-medium'>12 years climbing</span>
        <span className='text-md font-medium'>10 years coaching</span>
      </div>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col py-10'>
          <span className='w-auto font-medium text-xl'>
            Qualifications:
          </span>
          <ul className='text-md font-medium list-disc pl-5'>
            <li> CWA</li>
            <li> RCDI</li>
            <li> ML</li>
            <li> IML</li>
          </ul>
        </div>
        <div className='flex flex-col pr-10 py-10'>
          <span className='w-auto font-medium text-xl'>
            Professional Organisation:
          </span>
          <ul className='text-md font-medium list-disc pl-5'>
            <li> AMI</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col ml-10 py-10'>
        <span className='w-auto font-medium text-md'>
          Find more coaches like {name}:
        </span>
        <div className='flex flex-wrap w-full gap-1 pt-3 text-slate-50'>

        </div>
      </div>
      <div className='flex flex-col col-span-4 p-10'>
        <span className='w-auto font-medium text-2xl'>
          Description:
        </span>
        {isCoach ? (
          isDescriptionEditable ? (
            <textarea
              className='border border-2'
              defaultValue='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quidem modi reprehenderit vitae exercitationem aliquid
            dolores ullam temporibus enim expedita aperiam mollitia iure
            consectetur dicta tenetur, porro consequuntur saepe
            accusantium consequatur. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quidem modi reprehenderit
            vitae exercitationem aliquid dolores ullam temporibus enim
            expedita aperiam mollitia iure consectetur dicta tenetur,
            porro consequuntur saepe accusantium consequatur.'
            />
          ) : (
            <span className='text-md font-medium'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quidem modi reprehenderit vitae exercitationem aliquid
              dolores ullam temporibus enim expedita aperiam mollitia
              iure consectetur dicta tenetur, porro consequuntur saepe
              accusantium consequatur. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quidem modi reprehenderit
              vitae exercitationem aliquid dolores ullam temporibus enim
              expedita aperiam mollitia iure consectetur dicta tenetur,
              porro consequuntur saepe accusantium consequatur.
            </span>
          )
        ) : (
          <span className='text-md font-medium'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quidem modi reprehenderit vitae exercitationem aliquid
            dolores ullam temporibus enim expedita aperiam mollitia iure
            consectetur dicta tenetur, porro consequuntur saepe
            accusantium consequatur. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quidem modi reprehenderit
            vitae exercitationem aliquid dolores ullam temporibus enim
            expedita aperiam mollitia iure consectetur dicta tenetur,
            porro consequuntur saepe accusantium consequatur.
          </span>
        )}

        {isCoach ? (
          <button
            className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white'
            onClick={() => {
              setDescriptionEditable(!isDescriptionEditable)
            }}>
            {isDescriptionEditable ? 'Save' : 'Edit'}
          </button>
        ) : null}
      </div>
      <div className='flex flex-col col-span-4 p-10'>
        <span className='w-auto font-medium text-2xl'>
          Main Coaching Skills:
        </span>
        {isCoach ? (
          isCoachingSkillsEditable ? (
            <textarea
              className='border border-2'
              defaultValue='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quidem modi reprehenderit vitae exercitationem aliquid
            dolores ullam temporibus enim expedita aperiam mollitia iure
            consectetur dicta tenetur, porro consequuntur saepe
            accusantium consequatur. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quidem modi reprehenderit
            vitae exercitationem aliquid dolores ullam temporibus enim
            expedita aperiam mollitia iure consectetur dicta tenetur,
            porro consequuntur saepe accusantium consequatur.'
            />
          ) : (
            <span className='text-md font-medium'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quidem modi reprehenderit vitae exercitationem aliquid
              dolores ullam temporibus enim expedita aperiam mollitia
              iure consectetur dicta tenetur, porro consequuntur saepe
              accusantium consequatur. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quidem modi reprehenderit
              vitae exercitationem aliquid dolores ullam temporibus enim
              expedita aperiam mollitia iure consectetur dicta tenetur,
              porro consequuntur saepe accusantium consequatur.
            </span>
          )
        ) : (
          <span className='text-md font-medium'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quidem modi reprehenderit vitae exercitationem aliquid
            dolores ullam temporibus enim expedita aperiam mollitia iure
            consectetur dicta tenetur, porro consequuntur saepe
            accusantium consequatur. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quidem modi reprehenderit
            vitae exercitationem aliquid dolores ullam temporibus enim
            expedita aperiam mollitia iure consectetur dicta tenetur,
            porro consequuntur saepe accusantium consequatur.
          </span>
        )}

        {isCoach ? (
          <button
            className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white'
            onClick={() => {
              setCoachingSkillEditable(!isCoachingSkillsEditable)
            }}>
            {isCoachingSkillsEditable ? 'Save' : 'Edit'}
          </button>
        ) : null}
      </div>
    </div>
  )
}
