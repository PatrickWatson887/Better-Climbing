import Information from "./components/information";
import {TheTeam} from "./components/theTeam";


interface AboutUsProps {
}

const AboutUs = ({}: AboutUsProps) => (
  <>
    <div className='h-screen bg-gray-300 w-full '>
      <div className='container mx-auto my-5 p-5'>
        <div className='w-full h-64'>
          <Information />
          <TheTeam />
        </div>
      </div>
    </div>
  </>
)

export default AboutUs


