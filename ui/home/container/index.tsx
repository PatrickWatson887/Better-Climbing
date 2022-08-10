import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store'
import { setQuery } from '../reducer'

const mapState = (state: RootState) => ({
})

const mapDispatch = {
  setQuery
}

export const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>