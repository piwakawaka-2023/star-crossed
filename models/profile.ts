export interface Profile {
  id: number
  name: string
  age: number
  gender: string
  preference: string
  bio: string
  birthday: string
  image: string
  star_sign: {
    id: number
    date_range: string
    name: string
    blurb: string
    image: string
    default_compatibility: string
    created_at: string
    updated_at: string
  }
  matches: string
  compatibility: string
}

export interface StarSign {
  id: number
  date_range: string
  name: string
  blurb: string
  image: string
  default_compatibility: string
  created_at: string
  updated_at: string
}
export interface UserProfile {
  name: string
  age: number
  gender: string
  preference: string
  bio: string
  birthday: string
  image: string
  starSign: string
  matches: string
  compatibility: string
}
