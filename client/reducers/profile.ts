import { User, Action } from '../../models/Users'
import { SET_PROFILE, DEL_PROFILE } from '../actions/profile'

const initialState = {
  auth0_id: '',
  name: '',
  age: NaN,
  gender: '',
  preference: '',
  bio: '',
  birthday: '',
  image: '',
  star_sign_id: NaN,
  matches: '',
  compatibility: '',
  id: NaN,
  star_sign: {
    id: NaN,
    date_range: '',
    name: '',
    blurb: '',
    image: '',
    default_compatibility: '',
    created_at: '',
    updated_at: '',
  },
} as User

export default function profileReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_PROFILE:
      return payload
    case DEL_PROFILE:
      //? check this
      return null
    default:
      return state
  }
}
