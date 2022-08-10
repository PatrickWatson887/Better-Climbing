import { useState, useEffect, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

type CalendarProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> & {
  price: number
  isEditable: boolean
  addItemToCart: Function
  deferred?: any[]
}

export const Calendar = ({ isEditable, price, addItemToCart }: CalendarProps) => {
  const today = new Date()
  const [currentYear, setYear] = useState(today.getFullYear())
  const [currentWeek, setWeek] = useState<number[]>([])
  const [currentMonth, setMonth] = useState(today.getMonth())
  const [startWeek, setNewStart] = useState(
    today.getDate() - today.getDay() + 1
  )
  const months = [
    { month: 'Jan', days: 31 },
    { month: 'Feb', days: 28 },
    { month: 'Mar', days: 31 },
    { month: 'Apr', days: 30 },
    { month: 'May', days: 31 },
    { month: 'Jun', days: 30 },
    { month: 'Jul', days: 31 },
    { month: 'Aug', days: 31 },
    { month: 'Sep', days: 30 },
    { month: 'Oct', days: 31 },
    { month: 'Nov', days: 30 },
    { month: 'Dec', days: 31 },
  ]

  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentSpaces, setCurrentSpaces] = useState<string>('')
  type slot = {
    date: number
    booked: number
    total: number
    time: string
  }
  const [newSlots, updateNewSlots] = useState([{}])

  useEffect(() => {
    let dates: Array<number> = []
    for (var i = startWeek; i < startWeek + 7; i++) {
      dates = dates.concat(i)
    }
    setWeek(dates)
  }, [])

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  const [currentClasses, updateCurrentClasses] = useState([
    { date: 23, booked: 0, total: 1, time: '14:00' },
    { date: 23, booked: 1, total: 2, time: '16:00' },
    { date: 23, booked: 4, total: 8, time: '14:00' },
    { date: 3, booked: 0, total: 9, time: '15:00' },
    { date: 13, booked: 0, total: 1, time: '12:00' },
    { date: 25, booked: 1, total: 1, time: '16:00' },
    { date: 28, booked: 3, total: 6, time: '14:00' },
  ])

  function getWeek(start: number, end: number) {
    let dates: Array<number> = []
    for (var i = start; i < end; i++) {
      dates = dates.concat(i)
    }
    const remainder = 8 - dates.length
    for (var i = 1; i < remainder; i++) {
      dates = dates.concat(i)
    }
    return dates
  }

  function setUpCalendar(isNext: boolean) {
    let dates: Array<number> = []
    let currentStartWeek = isNext ? startWeek + 7 : startWeek - 7
    let daysInMonth = months[currentMonth].days

    if (currentStartWeek + 7 > daysInMonth) {
      if (currentStartWeek > daysInMonth) {
        currentStartWeek -= daysInMonth
        for (var i = currentStartWeek; i < currentStartWeek + 7; i++) {
          dates = dates.concat(i)
        }
        if (currentMonth == 11) {
          setMonth(0)
          setYear(currentYear + 1)
        } else {
          setMonth(currentMonth + 1)
        }
      } else {
        dates = getWeek(currentStartWeek, daysInMonth + 1)
      }
    } else if (currentStartWeek == daysInMonth) {
      dates = dates.concat()
      for (var i = 1; i < 7; i++) {
        dates = dates.concat(i)
      }
    } else if (currentStartWeek < 1) {
      currentStartWeek =
        months[currentMonth == 0 ? 11 : currentMonth - 1].days +
        currentStartWeek
      dates = getWeek(
        currentStartWeek,
        months[currentMonth == 0 ? 11 : currentMonth - 1].days + 1
      )
      if (currentMonth == 0) {
        setMonth(11)
        setYear(currentYear - 1)
      } else {
        setMonth(currentMonth - 1)
      }
    } else {
      for (var i = currentStartWeek; i < currentStartWeek + 7; i++) {
        dates = dates.concat(i)
      }
    }
    setWeek(dates)
    setNewStart(currentStartWeek)
  }

  function handlePage(isNext: boolean) {
    if (isNext) {
      setUpCalendar(true)
    } else {
      setUpCalendar(false)
    }
  }

  return (
    <>
      <div className='flex w-full flex-row items-left gap-x-4 bg-white rounded-lg text-center'>
        <div>
          <div className=''>{months[currentMonth].month}</div>
          <button
            onClick={() => {
              handlePage(false)
            }}
            className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white h-32'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M11 17l-5-5m0 0l5-5m-5 5h12'
              />
            </svg>
          </button>
        </div>
        <div className='grid grid-cols-7'>
          {days.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
          {currentWeek.map((date, index) => (
            <div
              className={`grid bg-white h-32 w-16 lg:w-24 xl:w-32 outline outline-1 outline-gray-300`}
              key={index}>
              <div className=''>{date}</div>
              <div className='flex flex-col'>
                {currentClasses
                  .filter((slot) => {
                    return slot.date == date
                  })
                  .map((time, index) => (
                    <Popover key={index}>
                      <Popover.Button>
                        <div
                          className='bg-blue-400 px-5 rounded-md text-white hover:bg-yellow-400 my-1'
                          key=''>
                          {time.time}
                        </div>
                      </Popover.Button>
                      <Transition
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'>
                        <Popover.Panel
                          as='nav'
                          className='absolute left-28 -bottom-10 rounded-md bg-gray-200 py-3 w-full'>
                          <div className='flex flex-col px-4 gap-y-3'>
                            <a className='text-sm font-bold'>
                              Booking on {date}th
                            </a>
                            <a className='text-sm font-bold'>
                              Time: {time.time}
                            </a>
                            <a className='text-sm font-bold'>
                              Spaces: {time.booked} / {time.total}
                            </a>
                            <button
                              className='bg-blue-400 rounded-md text-white'
                              onClick={() => {
                                addItemToCart({
                                  name: time.time + ' ' + time.date,
                                  id: '',
                                  price: price * 100,
                                  currency: 'GBP',
                                })
                              }}>
                              Book Time
                            </button>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                {isEditable ? (
                  <Popover>
                    <Popover.Button>
                      <div className='bg-blue-400 px-5 rounded-md text-white hover:bg-yellow-400 my-1'>
                        Add Time
                      </div>
                    </Popover.Button>
                    <Transition
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'>
                      <Popover.Panel
                        as='nav'
                        className='absolute left-32 -bottom-20 rounded-md bg-gray-200 py-3'>
                        <div className='flex flex-col px-4 gap-y-3'>
                          <a className='text-sm font-bold'>
                            Create a time slot: {date}th
                          </a>
                          <div>
                            <a className='text-sm font-bold'>Time:</a>
                            <input
                              id='time'
                              className='text-sm font-bold'
                              onChange={(e) => {
                                setCurrentTime(e.currentTarget.value)
                              }}
                              required
                            />
                          </div>
                          <div>
                            <a className='text-sm font-bold'>Spaces:</a>
                            <input
                              id='spaces'
                              className='text-sm font-bold'
                              onChange={(e) => {
                                setCurrentSpaces(e.currentTarget.value)
                              }}
                              required
                            />
                          </div>
                          <button
                            className='bg-blue-400 rounded-md text-white'
                            onClick={() => {
                              let thisSlot: slot = {
                                date: date,
                                booked: 0,
                                total: +currentSpaces,
                                time: currentTime,
                              }
                              updateNewSlots([...newSlots, thisSlot])
                              updateCurrentClasses([
                                ...currentClasses,
                                thisSlot,
                              ])
                              console.log(currentClasses)
                            }}>
                            Add Time
                          </button>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className=''>{currentYear}</div>
          <button
            onClick={() => {
              handlePage(true)
            }}
            className='px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white h-32'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </button>
        </div>
      </div>
      <span className='text-md font-medium text-gray-400'>
        Click a time to add it to your basket!
      </span>
    </>
  )
}
