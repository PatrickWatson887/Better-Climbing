import { ImageProps } from 'next/image'
import { LinkProps } from 'next/link'

export type Article = {
  id: number
  title: string
  description: string
  author: string
  profileSrc: ImageProps['src']
  articleLink: LinkProps['href']
  imageSrc: ImageProps['src']
  imageAlt?: ImageProps['alt']
}

export type Coach = {
  coachId: number
  profileSrc: ImageProps['src']
  name: string
  location: string
  lat: number
  lng: number
  rating: number
  tags: Tag[]
  header?: string
  body: string
  items?: Item[]
  feature?: {
    title: string
    description: string
  }
}

export type Item = {
  id: number
  title: string
  description: string
  price: number
  spaces: number
  spacesFilled: number
  type?: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  spaces: number
  spacesFilled: number
  currency: string
}

export type Tag = {
  id: number
  title: string
  synonym?: Synonym[]
  href?: string
}

export type Synonym = {
  tagId: number
  title: string
}

export type CoachDb = {
  coach_id: number
  first_name: string
  surname: string
  tag_id: number
  tag: string
  rating: number
  coach_description: string
  profile_pic_url: string
  location: string
  latitude: number
  longitude: number
  feature_title?: string
  feature_description?: string
}

export type ItemDb = {
  id: number
  title: string
  description: string
  price: number
  spaces: number
  spaces_filled: number
}

export type TagDb = {
  title: string
  description: string
}

export type SynonymDb = {
  id: number
  title: string
}
