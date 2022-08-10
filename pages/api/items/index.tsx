import http from '../http-common'
import { ItemDb } from 'types/features'

const getAllItems = () => {
  return http.get<Array<ItemDb>>(`/items`)
}

const getAllItemsForCoach = (coachId: number) => {
  return http.get<Array<ItemDb>>(`/items/${coachId}`)
}

const postNewItemForCoach = (coachId: number, sessionId: number) => {
  return http.post<Array<ItemDb>>(`/items/${coachId}/${sessionId}`)
}
const itemsService = {
  getAllItems,
  getAllItemsForCoach,
  postNewItemForCoach,
}

export default itemsService
