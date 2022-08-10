import Information from "./components/information";
import Items from "./components/items";
import { connector, PropsFromRedux } from "./container";

interface CoachProfileProps extends PropsFromRedux {
}

const CoachProfile = ({coach, addItemToCart}: CoachProfileProps) => (
  <>
    <div className='h-screen bg-gray-300 w-full '>
      <div className='container mx-auto my-5 p-5'>
        <div className='w-full h-64'>
          <Information {...coach}/>
          <Items coachId={coach.coachId} profileSrc={coach.profileSrc} addItemToCart={addItemToCart}/>
        </div>
      </div>
    </div>
  </>
)

export default connector(CoachProfile)


