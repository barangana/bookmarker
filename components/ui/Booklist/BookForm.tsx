import { useRouter } from 'next/router'
import { useState } from 'react'
import { addBook, editBook } from '../../../utils/lib/client/book-functions'
import { Book, FormData } from '../../../utils/types/types'
import { Button } from '../Button'
import { Input } from '../Input'
import text from '../../../utils/text.json'

//TODO: Refactor whole form so it does not look like copy paste

interface BookFormProps {
  sessionId?: string
  book?: Book
  mode?: string
  bookId?: number
}

export const BookForm: React.FC<BookFormProps> = ({
  sessionId,
  book,
  mode,
}) => {
  const { push } = useRouter()

  const [form, setForm] = useState<FormData>({
    userId: sessionId,
    title: '',
    pages: 0,
    pageLeftOff: 0,
    completed: false,
    favorite: false,
    type: '',
  })

  const handleSubmit = async (data: FormData) => {
    try {
      if (mode === 'edit') {
        editBook(book?.id ?? 0, data)
      } else {
        addBook(data)
      }
      push('/booklist')
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
          <label>{text.book_title}</label>
          <Input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label>{text.page_number}</label>
          <Input
            type='number'
            // value={book?.pages}
            onChange={(e) =>
              setForm({ ...form, pages: e.target.valueAsNumber })
            }
          />
          <label>{text.latest_page}</label>
          <Input
            type='number'
            // value={book?.pageLeftOff}
            onChange={(e) =>
              setForm({ ...form, pageLeftOff: e.target.valueAsNumber })
            }
          />
          <label>{text.book_type}</label>
          <Input
            // value={book?.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
          <label>{text.completed}</label>
          <Input
            type='checkbox'
            onChange={(e) => setForm({ ...form, completed: e.target.checked })}
          />
          {mode === 'edit' ? (
            <Button type='submit'>{text.edit_book}</Button>
          ) : (
            <div>
              <Button type='submit'>{text.add_book}</Button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default BookForm
