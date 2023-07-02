import { User, Action } from '../../models/users'
import { SET_PROFILE, DEL_PROFILE } from '../actions/profile'

const initialState = {} as User

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
