import { User, UserData, EditUserData } from '../../models/Users'

import * as api from '../apis/profile'
import { ThunkAction } from '../store'

export const SET_PROFILE = 'SET_PROFILE'
export const DEL_PROFILE = 'DEL_PROFILE'
export const ADD_PROFILE = 'ADD_PROFILE'
export const EDIT_PROFILE = 'EDIT_PROFILE'

//* Simple Actions
export function setProfile(profile: User) {
  return {
    type: SET_PROFILE,
    payload: profile,
  }
}

//? check if I need this
// export function editProfile(newProfile: User){
//   return {
//     type: EDIT_PROFILE,
//     payload: newProfile
//   }
// }

// export function addProfile(profile: UserData) {
//   return {
//     type: ADD_PROFILE,
//     payload: profile,
//   }
// }

export function delProfile(id: number) {
  return {
    type: DEL_PROFILE,
    payload: id,
  }
}

//* Thunk Actions

export function setUserThunk(profileId: number): ThunkAction {
  return async (dispatch) => {
    try {
      const profile = await api.fetchUser()
      dispatch(setProfile(profile))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

//! newInfo must be in a object form with correct key
export function editUserThunk(
  newInfo: EditUserData,
  infoname: string
): ThunkAction {
  return async (dispatch) => {
    try {
      const updatedProfile = await api.editUser(newInfo)
      dispatch(setProfile(updatedProfile))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function addUserThunk(profile: UserData): ThunkAction {
  return async (dispatch) => {
    try {
      const newProfile = await api.addUser(profile)
      dispatch(setProfile(newProfile))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function delUserThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.delUser(id)
      dispatch(delProfile(id))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
