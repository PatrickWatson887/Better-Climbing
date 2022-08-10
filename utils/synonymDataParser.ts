import { Coach, Tag, SynonymDb, Synonym } from 'types/features'

export const synonymDataParser = (data: SynonymDb[], coaches: Coach[]) => {
  var previousId = -1
  var synonyms: Synonym[] = []
  data.forEach((synonym: SynonymDb) => {
    if (previousId !== -1) {
      if (synonym.id === previousId) {
        synonyms.push({ tagId: synonym.id, title: synonym.title })
      } else {
        coaches.forEach((coach) => {
          coach.tags.forEach((tag) => {
            if (tag.id == previousId) {
              tag.synonym = synonyms
            }
          })
        })
        synonyms = [{ tagId: synonym.id, title: synonym.title }]
        previousId = synonym.id
      }
    } else {
      previousId = synonym.id
      synonyms.push({ tagId: synonym.id, title: synonym.title })
    }
  })
  coaches.forEach((coach) => {
    coach.tags.forEach((tag) => {
      if (tag.id == previousId) {
        tag.synonym = synonyms
      }
    })
  })
  return coaches
}
