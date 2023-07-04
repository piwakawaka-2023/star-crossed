import { Conversation } from '../../models/Conversations'

import * as api from '../apis/conversations'
import { ThunkAction } from '../store'

export const SET_CONVOS = 'SET_CONVOS'
export const ADD_CONVO = 'ADD_CONVO'

//* Simple Actions
export function setConvos(Conversations: Conversation[]) {
  return {
    type: SET_CONVOS,
    payload: Conversations,
  }
}

export function addConvo(Conversation: Conversation) {
  return {
    type: ADD_CONVO,
    payload: Conversation,
  }
}

//* Thunk Actions
export function setConvosThunk(id: number, matches: number[]): ThunkAction {
  return async (dispatch) => {
    try {
      const convosArr = await api.fetchConversations()
      dispatch(setConvos(convosArr))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function addConvoThunk(profile: User, matchId: number): ThunkAction {
  console.log('reaching thunks')
  return async (dispatch) => {
    try {
      const oldMatches = JSON.parse(profile.matches)
      await api.editUser(profile.id, {
        matches: [...oldMatches, matchId],
      })
      dispatch(addMatch(matchId))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
