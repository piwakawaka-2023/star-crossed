export interface ConversationData {
  participants: number
  messages: string
  read: string
}

export interface Conversation extends ConversationData {
  id: number
}
