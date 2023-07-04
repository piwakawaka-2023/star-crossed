import request from 'superagent'

import { EditUserData, User, UserData, NewUser } from '../../models/Users'

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
  const [file] = user.avatar
  try {
    const res = await request
      .post(`${apiRoute}/users`)
      .field({ auth0_id: user.auth0_id })
      .field({ name: user.name })
      .field({ age: user.age })
      .field({ gender: user.gender })
      .field({ preference: user.preference })
      .field({ bio: user.bio })
      .field({ birthday: user.birthday })
      .field({ image: user.image })
      .field({ star_sign_id: user.star_sign_id })
      .field({ matches: user.matches })
      .field({ compatibility: user.compatibility })
      .attach('avatar', file)
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
