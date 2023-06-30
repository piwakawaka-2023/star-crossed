/****************
 *      API     *
 ****************/

import type { Profile } from '../../models/profile'

export async function getProfiles() {
  const res = await fetch('/api/v1/profiles')
  try {
    const profiles = await res.json()
    return profiles as Profile[]
  } catch (error) {
    console.log(error, 'Route Error!')
  }
}

export async function getOneProfile(id: number) {
  const res = await fetch(`/api/v1/profiles/${id}`)
  try {
    const profile = await res.json()
    return profile as Profile
  } catch (error) {
    console.log(console.log(error, 'Route Error!'))
  }
}
