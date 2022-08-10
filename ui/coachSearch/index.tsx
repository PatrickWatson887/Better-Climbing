import SearchBar from "./components/searchBar";
import Coaches from "./components/coaches";
import { connector, PropsFromRedux } from "./container";

interface CoachSearchProps extends PropsFromRedux {
}

const CoachSearch = ({query, searchCoaches, setSelectedCoach}: CoachSearchProps) => (
  <>
    {/* <div className='container mx-auto w-1/2 pt-16'>
      <SearchBar query={query} searchCoaches={searchCoaches}/>
    </div> */}
    <div className='container mx-auto w-2/3 pt-16'>
      <Coaches/>
    </div>
  </>
)

export default connector(CoachSearch)
