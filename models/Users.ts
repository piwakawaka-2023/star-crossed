export interface UserData {
  auth0_id: string
  name: string
  age: number
  gender: string
  preference: string
  bio: string
  birthday: string
  image: string
  star_sign_id: number
  matches: string
  compatibility: string
}

//? Need to double check all these feilds are changable
export interface EditUserData {
  name?: string
  gender?: string
  preference?: string
  bio?: string
  image?: string
  matches?: string
}

export interface User extends UserData {
  id: number
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
}

export interface NewUser {
  auth0_id: string
  name: string
  age: number
  email: string
  gender: string
  preference: string[] | string
  bio: string
  birthday: string
  image: string
  star_sign_id: number
  matches: string
  compatibility: string
  avatar: File[]
}

export type Action =
  | { type: 'SET_PROFILE'; payload: User }
  | { type: 'DEL_PROFILE'; payload: number }
  | { type: 'ADD_PROFILE'; payload: UserData }
  | { type: 'EDIT_PROFILE'; payload: EditUserData }
  | { type: 'SET_MATCHES'; payload: User[] }
  | { type: 'DEL_MATCH'; payload: number }
  | { type: 'ADD_MATCH'; payload: User }
  | { type: 'SET_POTENTIALS'; payload: User[] }
  | { type: 'DEL_POTENTIAL'; payload: number }
