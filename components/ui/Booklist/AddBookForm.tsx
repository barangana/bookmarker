import { useState } from 'react'
import { addBook } from '../../../utils/lib/client/book-functions'

//TODO: Refactor whole form so it does not look like copy paste
//TODO: Refactor functions and put them outside as utils
//TODO: Readd type when 'type' is added to DB

interface FormData {
  userId: string
  title: string
  pages: number
  finished: boolean
}

interface AddBookFormProps {
  sessionId: string
}

const handleSubmit = async (data: FormData) => {
  try {
    addBook(data)
  } catch (error) {
    console.log(error)
  }
}

export const AddBookForm: React.FC<AddBookFormProps> = ({ sessionId }) => {
  const [form, setForm] = useState<FormData>({
    userId: sessionId,
    title: '',
    pages: 0,
    finished: false,
  })
  return (
    <div className='container mx-auto grid place-items-center h-screen bg-sky-100'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(form)
        }}
      >
        <div className='flex flex-col items-center'>
          <label>book title</label>
          <input
            className='rounded-full mb-4 pl-3'
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label>page number</label>
          <input
            className='rounded-full mb-4 pl-3'
            type='number'
            onChange={(e) =>
              setForm({ ...form, pages: e.target.valueAsNumber })
            }
          />
          {/* <label>type of book</label>
          <input
            className='rounded-full mb-4 pl-3'
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          /> */}
          <label>completed?</label>
          <input
            className='rounded-full mb-4 pl-3'
            type='checkbox'
            // value={form.completed}
          />
          <div>
            <button
              className='rounded-full bg-blue-200 p-3 px-6 text-xs'
              type='submit'
            >
              add book
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddBookForm
