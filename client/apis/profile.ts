import request from 'superagent'

import { User } from '../../models/Users'

const apiRoute = 'http://localhost:3000/api/v1'

// GET PROFILES
export function getProfiles() {
  try {
    return request.get(`${apiRoute}/users`).then((res) => {
      return res.body
    })
  } catch (err) {
    return err
  }
}

// GET PROFILE BY USER ID
export function getProfileById(id: number) {
  try {
    return request.get(`${apiRoute}/users/${id}`).then((res) => {
      console.log(res.body)
      return res.body
    })
  } catch (err) {
    return err
  }
}

// CHECK FOR PROFILES WITH AUTH0 ID

export function getProfileWithAuthInfo(auth0Id: string) {
  try {
    return request.get(`${apiRoute}/auth/${auth0Id}`).then((res) => {
      return res.body
    })
  } catch (err) {
    return err
  }
}
