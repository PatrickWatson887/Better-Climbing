import { SynonymDb, TagDb } from 'types/features'
import http from '../http-common'

export const getAllTags = () => {
  return http.get<Array<TagDb>>(`/tags`)
}

export const getTagsSynonyms = () => {
  return http.get<Array<SynonymDb>>(`/tags/synonyms`)
}

