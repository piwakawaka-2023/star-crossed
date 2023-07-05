import { User, Action } from '../../models/Users'
import { SET_POTENTIALS, DEL_POTENTIAL } from '../actions/potentials'

const initialState = [
  {
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
  },
] as User[]

export default function potentialsReducer(
  state = initialState,
  action: Action
) {
  const { type, payload } = action
  switch (type) {
    case SET_POTENTIALS:
      return payload
    case DEL_POTENTIAL:
      return state.filter((potential) => potential.id !== payload)
    default:
      return state
  }
}
