import { User } from '../../models/Users'
import { ThunkAction } from '../store'

export const SET_POTENTIALS = 'SET_POTENTIALS'
export const DEL_POTENTIAL = 'DEL_POTENTIAL'

//* Simple Actions
export function setPotentials(potentials: User[]) {
  return {
    type: SET_POTENTIALS,
    payload: potentials,
  }
}

export function delPotential(id: number) {
  return {
    type: DEL_POTENTIAL,
    payload: id,
  }
}

//* Thunk Actions
//? are these even thunks?
export function setPotentialsThunk(potentials: User[]): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(setPotentials(potentials))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function delPotentialThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(delPotential(id))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
