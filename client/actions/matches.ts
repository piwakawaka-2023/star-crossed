import { User } from '../../models/Users'

import * as api from '../apis/users'
import { ThunkAction } from '../store'

export const SET_MATCHES = 'SET_MATCHES'
export const DEL_MATCH = 'DEL_MATCH'
export const ADD_MATCH = 'ADD_MATCH'

//* Simple Actions
export function setMatches(matches: User[]) {
  return {
    type: SET_MATCHES,
    payload: matches,
  }
}

export function addMatch(match: User) {
  return {
    type: ADD_MATCH,
    payload: match,
  }
}

export function delMatch(id: number) {
  return {
    type: DEL_MATCH,
    payload: id,
  }
}

//* Thunk Actions
export function setMatchesThunk(matches: User[]): ThunkAction {
  return async (dispatch) => {
    try {
      const matchesArr = await api.editUser({ matches: matches }) //! check this line plz
      dispatch(setMatches(matchesArr))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function addMatchThunk(match: User, matches: User[]): ThunkAction {
  return async (dispatch) => {
    try {
      const newMatches = await api.editUser({ matches: [...matches, match] })
      dispatch(addMatch(newMatches))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function delMatchThunk(id: number, matches: User[]): ThunkAction {
  return async (dispatch) => {
    try {
      const updated = await api.editUser({
        matches: matches.filter((match) => match.id !== id),
      })
      dispatch(delMatch(id))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
