import { NextSeo } from 'next-seo'
import { NextPageWithLayout } from 'types/pages'
import { getLayout } from 'layouts/layout'
import CoachSearchComponent from 'ui/coachSearch'

const CoachSearch: NextPageWithLayout = () => {

  return (
    <>
      <NextSeo title='Search | Better Coaching' />
      <CoachSearchComponent/>
    </>
  )
}

CoachSearch.getLayout = getLayout

export default CoachSearch
