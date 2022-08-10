import { CoachItem } from '../components/coachItem'
import { useState, useEffect } from 'react'
import itemService from 'pages/api/items'
import { Item, ItemDb } from 'types/features'
import { useSession } from 'next-auth/react'


type ItemsProps = React.HTMLAttributes<HTMLDivElement> & {
  coachId: number
  profileSrc: string
  addItemToCart: Function
}

export default function Items({
  coachId,
  profileSrc,
  addItemToCart
}: ItemsProps) {
  const { data: session, status } = useSession()
  const isCoach = session?.roles.includes('admin') == true
  const [ activeTab, setActiveTab ] = useState(0)
  const [ indoorItems, setIndoorItems ] = useState<Item[]>([])
  const [ outdoorItems, setOutdoorItems ] = useState<Item[]>([])
  const [ planItems, setPlanItems ] = useState<Item[]>([])

  const tabs = [
        {title: 'Indoor'},
        {title: 'Outdoor'},
        {title: 'Training plans'}
    ]

  useEffect(() => {
    fetchCoachesItems()
  }, [])

  const fetchCoachesItems = () => {
    itemService
      .getAllItemsForCoach(coachId)
      .then(async (response: any) => {
        var indoorItemsParsed: Item[] = []
        var outdoorItemsParsed: Item[] = []
        var planItemsParsed: Item[] = []

        let type: string
        var currentItem: Item

        response.data.forEach((item: ItemDb, index: number) => {
          if(index % 3 === 0 ) {
            type = 'Indoor'
          } else if (index % 3 === 1) {
            type = 'Outdoor'
          } else {
            type = 'Plan'
          }
          currentItem = {
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            spaces: item.spaces,
            spacesFilled: item.spaces_filled,
            type: type
          }
          if (currentItem.type == 'Indoor') {
            indoorItemsParsed.push(currentItem)
          } else if (currentItem.type == 'Outdoor') {
            outdoorItemsParsed.push(currentItem)
          } else {
            planItemsParsed.push(currentItem)
          }
        })
        setIndoorItems(indoorItemsParsed)
        setOutdoorItems(outdoorItemsParsed)
        setPlanItems(planItemsParsed)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }
  return (
    <div className='h-screen bg-gray-300 w-full '>
      <div className='container mx-auto my-5 p-5'>
        <div className='w-full h-64'>
          <div className='bg-white p-3 shadow-sm rounded-lg'>
            <div className='divider-b'></div>
            {isCoach ? (
              <>
                <div className='relative p-3 m-4 bg-white border rounded rounded-lg shadow-sm border-gray-300'>
                  <div className='flex flex-col ml-3'>
                    <button
                      className='p-10 bg-blue-400 text-white mx-auto rounded-md'
                      onClick={() => {
                      }}>
                      New Class
                    </button>
                  </div>
                </div>
                <div className='my-4'></div>
              </>
            ) : null}
            <div className='grid grid-cols-3 px-3'>
                {tabs.map((tab, index)=> (
                    <button className={`${index == activeTab ? 'bg-green-400' : 'bg-blue-400'} hover:bg-green-400 border border-2 text-white rounded-md p-3`} onClick={ ()=> { setActiveTab(index) }} key={index}>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div>
                {
                    activeTab === 0 ?
                    indoorItems.length === 0 ? null :
                    indoorItems.map((item, index) => (
                      <div className='p-4' key={index}>
                        <CoachItem
                          {...item}
                          profileSrc={profileSrc}
                          isCoach={isCoach}
                          addItemToCart={addItemToCart}
                        />
                      </div>
                    )) : null
                ||  activeTab === 1 ?
                    outdoorItems.length === 0 ? null :
                    outdoorItems.map((item, index) => (
                    <div className='p-4' key={index}>
                      <CoachItem
                        {...item}
                        profileSrc={profileSrc}
                        isCoach={isCoach}
                        addItemToCart={addItemToCart}
                      />
                    </div>
                  )) : null
                ||  activeTab === 2 ?
                planItems.length === 0 ? null :
                planItems.map((item, index) => (
                  <div className='p-4' key={index}>
                    <CoachItem
                      {...item}
                      profileSrc={profileSrc}
                      isCoach={isCoach}
                      addItemToCart={addItemToCart}
                    />
                  </div>
                )) : null
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
