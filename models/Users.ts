export interface UserData {
  auth0Id: string
  name: string
  age: number
  gender: string
  prefrence: string
  bio: string
  birthday: string
  image: string
  starSignId: number
  matches: string
  compatibility: string
}

export interface User extends UserData {
  id: number
}
