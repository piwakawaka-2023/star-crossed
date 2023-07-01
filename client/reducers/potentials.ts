import { User, Action } from '../../models/users'
import { SET_POTENTIALS, DEL_POTENTIAL } from '../actions/potentials'

const initialState = [] as User[]

export default function matchesReducer(state = initialState, action: Action) {
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
