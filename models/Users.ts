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

//? Need to double check all these feilds are changable
export interface EditUserData {
  name?: string
  age?: number
  gender?: string
  prefrence?: string
  bio?: string
  birthday?: string
  image?: string
  starSignId: number
  matches?: string
  compatibility?: string
}

export interface User extends UserData {
  id: number
  star_sign: {
    id: number
    dateRange: string
    name: string
    blurb: string
    image: string
    defaultCompatibility: string
    created_at: string
    updated_at: string
  }
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
