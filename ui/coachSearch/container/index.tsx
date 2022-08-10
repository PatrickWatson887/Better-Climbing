import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store'
import { searchCoaches, setSelectedCoach } from '../reducer'

const mapState = (state: RootState) => ({
  query: state.home.query,
  filter: state.coachSearch.query
})

const mapDispatch = {
  searchCoaches,
  setSelectedCoach
}

export const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>