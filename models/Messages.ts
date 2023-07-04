export interface MessageData {
  user_id: number
  conversation_id: number
  date: string
  contents: string
}

export interface Message extends MessageData {
  id: number
}
