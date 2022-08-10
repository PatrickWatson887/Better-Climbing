import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store'
import { addItemToCart } from 'ui/cart/reducer'

const mapState = (state: RootState) => ({
  coach: state.coachSearch.selectedCoach
})

const mapDispatch = {
 addItemToCart
}

export const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>