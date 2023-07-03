import { User, Action } from '../../models/users'
import { SET_MATCHES, ADD_MATCH, DEL_MATCH } from '../actions/matches'

const initialState = [] as User[]

export default function matchesReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_MATCHES:
      return payload
    case ADD_MATCH:
      return [...state, payload]
    case DEL_MATCH:
      return state.filter((match) => match.id !== payload)
    default:
      return state
  }
}
