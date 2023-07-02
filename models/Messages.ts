export interface MessageData {
  dateRange: string
  name: string
  image: string
  defaultCompatibility: string
}

export interface Message extends MessageData {
  id: number
}
