interface SearchBarProps {
  searchCoaches: Function
  query?: string
}
export default function SearchBar({query, searchCoaches}: SearchBarProps) {

  const suggestedTags = ['Bouldering', 'Lead', 'Trad', 'Male', 'Female']

  async function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      searchCoaches(e.currentTarget.value)
    }
  }

  return (
    <>
    <div className='relative pb-6 text-xl font-bold text-slate-800'>
      <div className='relative grid grid-rows-2 gap-y-4'>
        <div>
          <input
            type='text'
            className='z-0 pl-5 pr-8 rounded-lg h-14 focus:shadow focus:outline-none justify-items-center w-full'
            placeholder='Search'
            defaultValue={query}
            onKeyPress={onEnter}
          />
          <div
            className='absolute flex -translate-y-1/2 top-7 right-4'
            onClick={() => {
            }}>
            <a className='relative p-3 rounded-full cursor-pointer group hover:bg-blue-100'>
              <div className='absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </div>
              <div className='absolute rounded opacity-0 invisible bg-slate-900 text-slate-100 text-sm w-max top-[120%] transition-all group-hover:visible group-hover:top-[130%] left-1/2 -translate-x-1/2 group-hover:opacity-100'>
                Clear Search
              </div>
            </a>
          </div>
        </div>
        <div className='w-full'>
          <div className='gap-2 md:grid md:grid-cols-2'>
            <div className='col-span-2'>
              <div className='relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6'>
                <div className='flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0'>
                  <div className='text-sm font-medium ml-3'>
                    Suggested tags to search:
                  </div>
                </div>
                <div className='text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4'>
                  {suggestedTags.map((tag: string, index) => (
                    <span
                      className='px-4 py-2 text-sm font-semibold text-white capitalize transition duration-300 bg-blue-500 rounded-full cursor-pointer w-max active:bg-gray-300 ease'
                      key={index}
                      onClick={() => {
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-4 right-3'>
          <i className='z-20 text-gray-400 fa fa-search hover:text-gray-500'></i>
        </div>
      </div>
    </div>
    </>
  )
}
