import { useRouter } from 'next/router'
import { useState } from 'react'
import { addBook } from '../../../utils/lib/client/book-functions'
import { FormData } from '../../../utils/types/types'
import { Button } from '../Button'
import { Input } from '../Input'

//TODO: Refactor whole form so it does not look like copy paste

interface AddBookFormProps {
  sessionId: string
}

export const AddBookForm: React.FC<AddBookFormProps> = ({ sessionId }) => {
  const { push } = useRouter()

  const [form, setForm] = useState<FormData>({
    userId: sessionId,
    title: '',
    pages: 0,
    type: '',
    completed: false,
  })

  const handleSubmit = async (data: FormData) => {
    try {
      addBook(data)
      push('/my-books')
    } catch (error) {
      console.error(error)
    }
  }

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
          <Input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label>page number</label>
          <Input
            type='number'
            onChange={(e) =>
              setForm({ ...form, pages: e.target.valueAsNumber })
            }
          />
          <label>type of book</label>
          <Input onChange={(e) => setForm({ ...form, type: e.target.value })} />
          <label>completed?</label>
          <Input
            type='checkbox'
            onChange={(e) => setForm({ ...form, completed: e.target.checked })}
          />
          <div>
            <Button type='submit'>add book</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddBookForm
