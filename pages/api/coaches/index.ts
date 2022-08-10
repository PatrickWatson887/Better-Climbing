import { CoachDb } from 'types/features'
import http from '../http-common'

export default function getAllCoaches() {
  return http.get<Array<CoachDb>>('/coaches')
}

export const getAllWithTags = () => {
  return http.get<Array<CoachDb>>('/coach/getAllWithTags')
}

export const getFeatured = () => {
  return http.get<Array<CoachDb>>('/coach/featured')
}