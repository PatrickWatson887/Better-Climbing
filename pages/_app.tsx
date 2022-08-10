import 'tailwindcss/tailwind.css'
import '../config/tailwind.custom.css'
import { Provider } from 'react-redux';
import { store } from 'store';
import SEO from '../config/seo'
import { DefaultSeo } from 'next-seo'
import { SessionProvider } from "next-auth/react"
import { AppPropsWithLayout } from 'types/pages';
import { Auth } from 'ui/components/auth/auth'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from 'utils/gtag'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


function MyApp({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()

  // Google tracking
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Friendly reminder to add getLayout to every component
  if (process.env.NODE_ENV === 'development' && !Component.getLayout) {
    console.warn('No layout provided for this page!', Component.displayName)
  }

  let persistor = persistStore(store);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider session={session}>
              {/* If auth exists on a component, role-checking is performed by the Auth component */}
              {Component.auth ? (
                <Auth auth={Component.auth}>
                  {getLayout(<Component {...pageProps} />)}
                </Auth>
              ) : (
                getLayout(<Component {...pageProps} />)
              )}
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;