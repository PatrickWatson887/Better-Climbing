import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store'
import { } from '../reducer'

const mapState = (state: RootState) => ({
  cart: state.cart.cartItems
})

const mapDispatch = {
}

export const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>