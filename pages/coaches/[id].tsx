import { NextSeo } from 'next-seo'
import { NextPageWithLayout } from 'types/pages'
import { getLayout } from 'layouts/layout'
import CoachProfileComponent from 'ui/coachProfile'

const CoachProfile: NextPageWithLayout = () => {

  return (
    <>
      <NextSeo title='Search | Better Coaching' />
      <CoachProfileComponent/>
    </>
  )
}

CoachProfile.getLayout = getLayout

export default CoachProfile
