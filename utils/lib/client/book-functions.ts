import { FormData, Book } from '../../types/types'

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

//TODO: Change so that when click it changes from true to false and vice versa.
export const favoriteBook = async (id: number) => {
  try {
    fetch(`http://localhost:3000/api/books/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
    })
  } catch (error) {
    console.log(error)
  }
}

export const editBook = async (id: number, data: FormData) => {
  try {
    fetch(`http://localhost:3000/api/books/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({
        title: data.title,
        pages: data.pages,
        pageLeftOff: data.pageLeftOff,
        completed: data.completed,
        type: data.type,
      }),
    })
  } catch (error) {
    console.log(error)
  }
}
