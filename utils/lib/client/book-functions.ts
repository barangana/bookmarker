export interface FormData {
  userId: string
  title: string
  pages: number
  finished: boolean
}

export const addBook = async (data: FormData) => {
  try {
    fetch('http://localhost:3000/api/add', {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteBook = async (id: number) => {
  try {
    fetch(`http://localhost:3000/api/books/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
  }
}
