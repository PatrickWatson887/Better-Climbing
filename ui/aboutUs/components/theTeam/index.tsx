export const TheTeam = () => {
    const team = [
      {
        name: 'Danaan',
        title: '',
        description:
          'Founder of Better Climbing, Danaan has committed himself to pushing the climbing industry forward. Having worked as a coach at birthday parties, right up to national teams he has developed a deep understanding of the important role coaching plays in the climbing world. Better Climbing is a way of allowing those who are most passionate about climbing to overcome the pitfalls in the industry and make a living doing what they love.',
      },
      {
        name: 'Woods',
        title: '',
        description:
          'Andrew Woods is one of the developers behind the site you are using right now. He graduated in 2019 with a Masters in Computer Games Development and works as a full stack engineer in Northern Ireland. He has been climbing for an awfully long time, but got properly stuck in during university heading on trips all around Europe and the UK. Andrew enjoys spending his time bouldering and trad climbing around Ireland, with a penchant for awkward heel hooks and tech-y crux-y climbs. Andrew worked as a climbing instructor throughout his 5 years at university and this provided the enthusiasm and motivation to get involved with this project and provide effective solutions for both coaches and clients.',
      },
      { name: 'Patrick', title: '', description: '' },
    ]

    return (
      <>
        <div className='flex items-center justify-center min-h-screen bg-white py-48'>
          <div className='flex flex-col'>
            <div className='flex flex-col mt-8'>
              <div className='container max-w-7xl px-4'>
                <div className='flex flex-wrap justify-center text-center mb-24'>
                  <div className='w-full lg:w-6/12 px-4'>
                    <h1 className='text-gray-900 text-4xl font-bold mb-8'>
                      Meet the Team
                    </h1>

                    <p className='text-gray-700 text-lg font-light'>
                      With over 40 years of combined experience, we have a
                      well-seasoned team at the helm.
                    </p>
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-x-4'>
                  {team.map((member) => (
                    <div
                      className='w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4'
                      key=''>
                      <div className='flex flex-col'>
                        <a href='#' className='mx-auto'>
                          <img
                            className='rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100'
                            src='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
                          />
                        </a>

                        <div className='text-center mt-6'>
                          <h1 className='text-gray-900 text-xl font-bold mb-1'>
                            {member.name}
                          </h1>

                          <div className='text-gray-700 font-light mb-2'>
                            {member.title}
                          </div>
                          <div className='text-gray-700 font-light mb-2'>
                            {member.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
