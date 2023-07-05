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
      .field({ preference: JSON.stringify(user.preference) })
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

//GET POTENTIAL MATCHES AND SORT THEM WITH USER ID

export async function getPotentialsWithId(profile: User) {
  try {
    const res = await request.get(`${apiRoute}/potentials/${profile.id}`)
    console.log(res.body)
    const potentials = res.body.filter((user: User) => {
      const preference = JSON.parse(user.preference)
      console.log(preference)
      const bool = preference.includes(profile.gender)
      return bool
    })
    return potentials
  } catch (err) {
    console.log('API Error err', err)
    return err
  }
}

// Gets hot babes to chat up

export async function getMatches(id: number) {
  try {
    return request.get(`${apiRoute}/matches/${id}`).then((res) => {
      return res.body
    })
  } catch (err) {
    return err
  }
}
