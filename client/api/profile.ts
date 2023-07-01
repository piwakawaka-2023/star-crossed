/****************
 *      API     *
 ****************/
import request from 'superagent'
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

// GET ONE PROFILE BY USER ID

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

// export function getOneProfile(id: number) {
//   const res = await fetch(`/users/${id}`)
//   try {
//     const profile = await res.json()
//     return profile as Profile
//   } catch (error) {
//     console.log(console.log(error, 'Route Error!'))
//   }
// }
