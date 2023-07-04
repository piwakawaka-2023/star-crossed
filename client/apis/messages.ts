import request from 'superagent'
const apiRoute = 'http://localhost:3000/api/v1'

import { MessageData } from '../../models/Messages'

export async function fetchMessages(convoId: number) {
  try {
    const res = await request.get(`${apiRoute}/messages/${convoId}`)
    return res.body
  } catch (err) {
    return err
  }
}

export async function addMessages(message: MessageData) {
  try {
    const res = await request.post(`${apiRoute}/messages/`).send(message)
    return res.body
  } catch (err) {
    return err
  }
}

export async function deleteMessages(messageId: number) {
  try {
    await request.delete(`${apiRoute}/messages/${messageId}`)
  } catch (err) {
    return err
  }
}
