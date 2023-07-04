import request from 'superagent'
const apiRoute = 'http://localhost:3000/api/v1'

import { ConversationData } from '../../models/Conversations'


//!gona need to seperate out the convo id somehow 
export async function fetchConversations(id: number) {
  try {
    const res = await request.get(`${apiRoute}/conversations/${id}`)
    return res.body
  } catch (err) {
    return err
  }
}

export async function addConversations(data: ConversationData) {
  try {
    const res = await request.post(`${apiRoute}/conversations`).send(data)
    return res.body
  } catch (err) {
    return err
  }
}
