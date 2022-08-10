import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { Role } from './next-auth'

export type PageLayout = React.FC

export type PageGetLayout = (page: ReactElement) => ReactNode

export type NextPageWithLayout = NextPage & {
  getLayout: PageGetLayout
  auth?: PageAuth
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type PageAuth = {
  /** Required role in order to access page */
  role: Role[]

  /** Element to render while loading */
  loading: (props: any) => JSX.Element

  /** URL to redirect to */
  unauthorized: string
}
