import HomeComponent from 'ui/home'
import { NextSeo } from 'next-seo'
import { NextPageWithLayout } from 'types/pages'
import { getLayout } from '../layouts/layout'


const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title='Home | Better Coaching' />
      <HomeComponent/>
    </>
  )
}

Home.getLayout = getLayout

export default Home
