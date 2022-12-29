export interface FormData {
  userId?: string
  title: string
  pages: number
  pageLeftOff: number
  completed: boolean
  favorite: boolean
  type: string
}

export type Book = {
  id: number
  title: string
  pages: number
  pageLeftOff: number
  completed: boolean
  favorite: boolean
  type: string
}
