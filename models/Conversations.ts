export interface ConversationData {
  user_id: number
  date: string
  contents: string
}

export interface Conversation extends ConversationData {
  id: number
}
