import { NextSeo } from 'next-seo'
import { NextPageWithLayout } from 'types/pages'
import { getLayout } from 'layouts/layout'
import ContactUsComponent from 'ui/contactUs'

const ContactUs: NextPageWithLayout = () => {

  return (
    <>
      <NextSeo title='Contact Us | Better Coaching' />
      <ContactUsComponent/>
    </>
  )
}

ContactUs.getLayout = getLayout

export default ContactUs
