import request from 'superagent'

import { EditUserData, User, UserData } from '../../models/Users'

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
    const matches = res.body
    console.log('The matches: ' + matches)
    return res.body
  } catch (err) {
    return err
  }
}

export async function addUser(user: UserData) {
  try {
    const res = await request.post(`${apiRoute}/users`).send(user)
    return res.body
  } catch (err) {
    return err
  }
}

export async function editUser(id: number, user: EditUserData) {
  try {
    const res = await request.patch(`${apiRoute}/users/${id}`).send(user)
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
