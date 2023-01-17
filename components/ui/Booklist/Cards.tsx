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

// TODO: Fix styling inside of cards

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
    <div className='max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-900'>
      <div className='flex px-4 py-2 justify-between'>
        <HeartIcon id={data.id} favorite={data.favorite} />
        <button onClick={() => handleDelete(data.id)}>delete</button>
      </div>
      <div className=''>
        <Link href='/'>
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {data.title}
          </h3>
        </Link>
        <div>
          {text.booklist_type_of_book}: {data.type}
        </div>
        <div className=''>
          {text.booklist_nb_pages}: {data.pages}
        </div>
        <div>
          {text.latest_page}: {data.pageLeftOff}
        </div>
        <div className=''>
          {text.booklist_status}:
          {data.completed === true ? ' completed' : ' not completed'}
        </div>
        <div className=''>
          <Link href={`/booklist/${data.id.toString()}`}>
            <Button>Edit</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
