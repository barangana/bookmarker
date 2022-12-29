import React from 'react'
import { Book } from '../../../utils/types/types'
import text from '../../../utils/text.json'
import { deleteBook } from '../../../utils/lib/client/book-functions'
import { useRouter } from 'next/router'
import { HeartIcon } from '../Icons/HeartIcon'
import Link from 'next/link'
import { Button } from '../Button'

type CardsProps = {
  data: Book
}

// TODO: Potentially add book images?
// TODO: Change test and test2 into icons (favorite and delete)
// TODO: Change page number button later

export const Cards: React.FC<CardsProps> = ({ data }: CardsProps) => {
  const router = useRouter()
  const refreshPage = () => {
    router.replace(router.asPath)
  }

  const handleDelete = async (id: number) => {
    try {
      deleteBook(id)
      refreshPage()
    } catch (error) {
      // Replace with Sentry eventually
      console.log(error)
    }
  }

  return (
    <div className='w-72 h-72 bg-sky-100 rounded-xl'>
      <div className='flex flex-row px-4 py-2 justify-between'>
        <HeartIcon id={data.id} favorite={data.favorite} />
        <button onClick={() => handleDelete(data.id)}>delete</button>
      </div>
      <div className='pl-4'>
        <Link href='/'>
          <h3 className='text-2xl font-semibold pt-6'>{data.title}</h3>
        </Link>
        <div>
          {text.booklist_type_of_book}: {data.type}
        </div>
        <div className='pt-6'>
          {text.booklist_nb_pages}: {data.pages}
        </div>

        <div>
          {text.latest_page}: {data.pageLeftOff}
        </div>
        <div className='pt-8'>
          {text.booklist_status}:
          {data.completed === true ? ' completed' : ' not completed'}
        </div>
        <Link href={`/booklist/${data.id.toString()}`}>
          <Button>Edit</Button>
        </Link>
      </div>
    </div>
  )
}
