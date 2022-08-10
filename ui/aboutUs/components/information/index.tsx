import Image from 'next/image'

type AboutUsProps = React.HTMLAttributes<HTMLDivElement> & {
  deferred?: any[]
}

export default function AboutUs({ ...deferred }: AboutUsProps) {
  const { className = '', ...rest } = deferred

  return (
    <>
        <div>
          <div className='bg-gray-100 lg:py-12 lg:flex lg:justify-center'>
            <div className='bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg'>
              <div className='lg:w-1/2'>
                <div className='object-scale-down'>
                  <Image
                    width='500px'
                    height='300px'
                    src='/img/yonder.png'
                    alt='A coach with client'
                    layout='fixed'
                  />
                </div>
              </div>
              <div className='py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2'>
                <h2 className='text-3xl text-gray-800 font-bold'>
                  What is{' '}
                  <span className='text-indigo-600'>Better Climbing?</span>
                </h2>
                <p className='mt-4 text-gray-600'>
                  Climbing is exploding around the world and more people than
                  ever are looking to take part in the world’s fastest growing
                  sport. Better Climbing is here to make it as easy as possible
                  for you to get involved! <br />
                  <br />
                  While on the most basic level climbing is exceptionally
                  simple, there is a lot to learn on the way to you unlocking
                  your full potential. Working with a coach is the best way to
                  do that. <br />
                  <br />
                  Not only will a coach give you the skills to conquer exciting
                  challenges, but they will also show you how climbing can train
                  your body as well as any gym and introduce you to one of the
                  world’s most friendly communities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-gray-100 lg:py-12 lg:flex lg:justify-center'>
            <div className='bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg'>
              <div className='py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2'>
                <h2 className='text-3xl text-gray-800 font-bold'>
                  What we <span className='text-indigo-600'>do?</span>
                </h2>
                <p className='mt-4 text-gray-600'>
                  Better Climbing is a place where climbers can connect with
                  coaches around the world. We collect coaches who are truly
                  passionate about the sport in order to provide you with the
                  best possible service. <br />
                  <br />
                  Here you can browse coaches in your desired niche and find the
                  best one for you. With our integrated payment system, we make
                  it as easy as possible for coaches to do their job and for you
                  to get climbing!
                </p>
              </div>
              <div className='lg:w-1/2'>
                <div className='object-scale-down justify-right'>
                  <Image
                    width='500px'
                    height='300px'
                    src='/img/yonder.png'
                    alt='A coach with client'
                    layout='fixed'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
