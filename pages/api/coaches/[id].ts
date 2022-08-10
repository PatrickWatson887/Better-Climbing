import { CoachDb } from 'types/features'
import http from '../http-common'

export default function getCoachById(id: string){
    return http.get<CoachDb>(`/coaches/${id}`)
  }
