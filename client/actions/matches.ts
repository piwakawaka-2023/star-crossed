import { User } from '../../models/Users'

import * as api from '../apis/users'
import { ThunkAction } from '../store'

export const SET_MATCHES = 'SET_MATCHES'
export const DEL_MATCH = 'DEL_MATCH'
export const ADD_MATCH = 'ADD_MATCH'

//* Simple Actions
export function setMatches(matches: number[]) {
  return {
    type: SET_MATCHES,
    payload: matches,
  }
}

export function addMatch(matchId: number) {
  return {
    type: ADD_MATCH,
    payload: matchId,
  }
}

export function delMatch(matchId: number) {
  return {
    type: DEL_MATCH,
    payload: matchId,
  }
}

//* Thunk Actions
export function setMatchesThunk(profile: User): ThunkAction {
  return async (dispatch) => {
    try {
      const matchesArr = JSON.parse(profile.matches)
      dispatch(setMatches(matchesArr))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function addMatchThunk(
  matches: number[],
  profile: User,
  matchId: number
): ThunkAction {
  console.log('reaching thunks')
  return async (dispatch) => {
    try {
      await api.editUser(profile.id, {
        matches: JSON.stringify([...matches, matchId]),
      })
      dispatch(addMatch(matchId))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function delMatchThunk(id: number, matches: number[]): ThunkAction {
  return async (dispatch) => {
    try {
      await api.editUser(id, {
        matches: JSON.stringify(matches.filter((match) => match !== id)),
      })
      dispatch(delMatch(id))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
