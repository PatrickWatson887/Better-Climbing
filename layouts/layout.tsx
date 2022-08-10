import NavBar from 'ui/components/navbar'
import Footer from 'ui/components/footer'
import Banner from 'ui/components/banner'
import { PageGetLayout, PageLayout } from 'types/pages'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Coaches', href: '/coaches' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact Us', href: '/contactUs' },
  { name: 'About Us', href: '/aboutUs' },
]

const Layout: PageLayout = ({ children }) => {
  return (
    <div className='absolute inset-0 flex flex-col'>
      <Banner visible={false} />
      <NavBar links={links} />
      <main className='flex-1 z-10 w-full pb-[324px]'>
        <div className='flex-1 w-full bg-slate-200'>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export const getLayout: PageGetLayout = (page) => <Layout >{page}</Layout>

export default Layout
