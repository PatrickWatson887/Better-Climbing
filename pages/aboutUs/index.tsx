import { NextSeo } from 'next-seo'
import { NextPageWithLayout } from 'types/pages'
import { getLayout } from 'layouts/layout'
import AboutUsComponent from 'ui/aboutUs'

const AboutUs: NextPageWithLayout = () => {

  return (
    <>
      <NextSeo title='About Us | Better Coaching' />
      <AboutUsComponent/>
    </>
  )
}

AboutUs.getLayout = getLayout

export default AboutUs
