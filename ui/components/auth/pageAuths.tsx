import { PageAuth } from 'types/pages'

export const adminAuth: PageAuth = {
  role: ['admin'],
  loading: () => <div>LOADING</div>,
  unauthorized: '/access-denied',
}

export const userAuth: PageAuth = {
  role: ['user'],
  loading: () => <div>Loading for user...</div>,
  unauthorized: '/access-denied',
}
