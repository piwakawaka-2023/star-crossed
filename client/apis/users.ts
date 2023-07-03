import request from 'superagent'

import { EditUserData, NewUser, User } from '../../models/Users'

const apiRoute = 'http://localhost:3000/api/v1'

// GET PROFILES
export async function fetchUsers() {
  try {
    const res = await request.get(`${apiRoute}/users`)
    return res.body
  } catch (err) {
    return err
  }
}

// GET PROFILE BY USER ID
export async function fetchUser(id: number) {
  try {
    const res = await request.get(`${apiRoute}/users/${id}`)
    return res.body
  } catch (err) {
    return err
  }
}

export async function addUser(user: NewUser) {
  try {
    const res = await request.post(`${apiRoute}/users`).send(user)
    return res.body
  } catch (err) {
    return err
  }
}

export async function editUser(id: number, user: EditUserData) {
  try {
    const res = await request
      .patch(`${apiRoute}/users/${id}`)
      .send(JSON.stringify(user))
    return res.body
  } catch (err) {
    return err
  }
}

export async function removeUser(id: number) {
  try {
    await request.delete(`${apiRoute}/users/${id}`)
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
