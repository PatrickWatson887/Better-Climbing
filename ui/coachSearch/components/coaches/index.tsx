import { useState, useEffect } from 'react'
import { Coach } from 'types/features'
import { CoachCard } from 'ui/components/coach'
import geocode from 'pages/api/googleMaps/geocode'
import Fuse from 'fuse.js'
import { getAllWithTags } from 'pages/api/coaches'
import { getTagsSynonyms } from 'pages/api/tags'
import { coachDataParser } from 'utils/coachDataParser'
import { synonymDataParser } from 'utils/synonymDataParser'

type AllCoachesProps = React.HTMLAttributes<HTMLDivElement> & {
  deferred?: any[]
}

export default function AllCoaches({ ...deferred }: AllCoachesProps) {
  const { className = '', ...rest } = deferred
  const [query, updateQuery] = useState('')
  const [coachesResults, updateCoaches] = useState<Coach[]>([])
  const [allCoaches, setCoaches] = useState<Coach[]>([])

  const suggestedTags = ['Bouldering', 'Lead', 'Trad', 'Male', 'Female']

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
      getAllWithTags()
      .then(async (response: any) => {
        const tempCoaches = coachDataParser(response.data)
          getTagsSynonyms()
          .then(async (response: any) => {
            let coaches: Coach[] = synonymDataParser(response.data, tempCoaches)
            setCoaches(coaches)
            updateCoaches(coaches)
          })
          .catch((e: Error) => {
            console.log(e)
          })
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    updateQuery(e.currentTarget.value)
  }

  async function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && query !== '') {
      await applyAllFilters(allCoaches, query)
    }
  }

  async function applyAllFilters(searchedCoaches: Coach[], tag: string) {
    let filters = []
    tag !== ''
      ? filters.push(tag)
      : query.split(' ').forEach((search) => {
          filters.push(search)
        })
    console.log(filters)
    if (filters.length > 0) {
      for (let i = 0; i < filters.length; i++) {
        searchedCoaches = await applyFilter(searchedCoaches, filters[i])
      }
    } else if (tag == '') {
      searchedCoaches = await applyFilter(searchedCoaches, query)
    }
    updateCoaches(searchedCoaches)
  }

  async function applyFilter(searchedCoaches: Coach[], filter: string) {
    let fuse = new Fuse(searchedCoaches, {
      keys: ['name', 'tags.title', 'tags.synonym.title'],
      threshold: 0.1,
      fieldNormWeight: 1
    })
    let results = fuse.search(filter)
    if (results.length == 0) {
      return searchCoachesByLocation(searchedCoaches, filter)
    }
    return results.map((coach) => coach.item)
  }

  async function searchCoachesByLocation(
    searchedCoaches: Coach[],
    location: string
  ) {
    let { lat, lng } = await geocode(location)
    searchedCoaches = searchedCoaches.filter((coach) => {
      return (
        distanceInKmBetweenEarthCoordinates(lat, lng, coach.lat, coach.lng) <
        165
      )
    })
    return searchedCoaches
  }

  return (
    <section
      className={`relative flex flex-col items-center pt-14 pb-10 overflow-auto max-w-7xl divider-b ${className}`}
      {...rest}>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <span
          className={
           'opacity-0 animate-appear'
          }>
          Take a browse through our expert coaches. Search by name, expertise or
          location.
        </span>
      </div>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <div className='relative grid grid-rows-2 gap-y-4'>
          <div>
            <input
              type='text'
              className='z-0 pl-5 pr-8 rounded-lg h-14 focus:shadow focus:outline-none justify-items-center w-full'
              placeholder='Search'
              value={query}
              onChange={onSearch}
              onKeyPress={onEnter}
            />
            <div
              className='absolute flex -translate-y-1/2 top-7 right-4'
              onClick={() => {
                updateQuery('')
                updateCoaches(allCoaches)
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
                    {suggestedTags.map((tag: string) => (
                      <span
                        className='px-4 py-2 text-sm font-semibold text-white capitalize transition duration-300 bg-blue-500 rounded-full cursor-pointer w-max active:bg-gray-300 ease'
                        key={`${tag}`}
                        onClick={() => {
                          updateQuery(tag)
                          applyAllFilters(allCoaches, tag)
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
      <div className='flex flex-wrap justify-center py-4'>
        <FilteredCoaches searchResults={coachesResults} />
      </div>
    </section>
  )
}

type FilteredCoachesProps = {
  searchResults: Coach[]
}
const FilteredCoaches = ({ searchResults }: FilteredCoachesProps) => {
  if (searchResults.length === 0) {
    return <p>Sorry there appears to be no matches for your search</p>
  } else {
    return (
      <>
        {searchResults.map((coach) => (
          <div key={coach.coachId.toString()} className='p-4'>
            <CoachCard {...coach} />
          </div>
        ))}
      </>
    )
  }
}

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180
}

function distanceInKmBetweenEarthCoordinates(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  var earthRadiusKm = 6371

  var dLat = degreesToRadians(lat2 - lat1)
  var dLon = degreesToRadians(lon2 - lon1)

  lat1 = degreesToRadians(lat1)
  lat2 = degreesToRadians(lat2)

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadiusKm * c
}
