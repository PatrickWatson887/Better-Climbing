import { Coach, Tag, CoachDb } from 'types/features'

export const coachDataParser = (data: CoachDb[]) => {
  var previousId = -1
  var tags: Tag[] = []
  var previousCoach: Coach = {
    coachId: 0,
    name: '',
    body: '',
    rating: 0,
    location: '',
    profileSrc: '',
    lat: 0,
    lng: 0,
    tags: [{ id: 0, title: '', synonym: [{ tagId: -1, title: '' }] }],
  }
  var coaches: Coach[] = []
  data.forEach((coach: CoachDb) => {
    if (previousId !== -1) {
      if (coach.coach_id === previousId) {
        tags.push({
          id: coach.tag_id,
          title: coach.tag,
          synonym: [{ tagId: -1, title: '' }],
        })
      } else {
        previousCoach.tags = tags
        coaches.push(previousCoach)
        tags = [
          {
            id: coach.tag_id,
            title: coach.tag,
            synonym: [{ tagId: -1, title: '' }],
          },
        ]
        previousCoach = {
          coachId: coach.coach_id,
          name: coach.first_name + ' ' + coach.surname,
          body: coach.coach_description,
          rating: coach.rating,
          location: coach.location,
          profileSrc: coach.profile_pic_url,
          lat: coach.latitude,
          lng: coach.longitude,
          tags: [{ id: 0, title: '', synonym: [{ tagId: -1, title: '' }] }],
        }
        if (coach.feature_title && coach.feature_description)
          previousCoach.feature = {
            title: coach.feature_title,
            description: coach.feature_description,
          }
        previousId = coach.coach_id
      }
    } else {
      previousCoach = {
        coachId: coach.coach_id,
        name: coach.first_name + ' ' + coach.surname,
        body: coach.coach_description,
        rating: coach.rating,
        location: coach.location,
        profileSrc: coach.profile_pic_url,
        lat: coach.latitude,
        lng: coach.longitude,
        tags: [{ id: 0, title: '', synonym: [{ tagId: -1, title: '' }] }],
      }
      if (coach.feature_title && coach.feature_description)
        previousCoach.feature = {
          title: coach.feature_title,
          description: coach.feature_description,
        }
      previousId = coach.coach_id
      tags.push({
        id: coach.tag_id,
        title: coach.tag,
        synonym: [{ tagId: -1, title: '' }],
      })
    }
  })
  previousCoach.tags = tags
  coaches.push(previousCoach)
  return coaches
}
