export interface ConversationData {
  participants: string
  messages: string
  read: string
}

export interface Conversation extends ConversationData {
  id: number
}
