import request from 'superagent'
const apiRoute = 'http://localhost:3000/api/v1'

export async function fetchStarSigns() {
  try {
    const res = await request.get(`${apiRoute}/star_signs`)
    return res.body
  } catch (err) {
    return err
  }
}
