import Hero from "./components/hero";
import BookNow from "./components/bookNow";
import FeaturedCoaches from "./components/featuredCoaches";
import { connector, PropsFromRedux } from "./container";

interface HomeProps extends PropsFromRedux {
}

const Home = ({setQuery}: HomeProps) => (
  <>
    <div className='flex flex-col items-center justify-center'>
      <Hero setQuery={setQuery}/>
      <FeaturedCoaches/>
      <BookNow/>
    </div>
  </>
)

export default connector(Home)
