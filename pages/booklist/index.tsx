import React, { useState } from 'react'
import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'
import { GetServerSideProps, NextPage } from 'next'
import { Book } from '../../utils/types/types'
import { Layout } from '../../components'
import { Cards } from '../../components'

//TODO: Once Next13 has a stable build, migrate to Next13 data fetching
//TODO: If books is empty, show a message that should allow user to add books

interface BooksProps {
  books: [Book]
}

const Books: NextPage<BooksProps> = ({ books }) => {
  const [search, setSearch] = useState('')
  const filteredSearch = books.filter((book: Book) =>
    search !== ''
      ? book.title.includes(search) || book.type.includes(search)
      : true
  )
  console.log(search)
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <Layout>
        <div className='flex gap-12 container mx-auto my-4'>
          {/* <h1 className='text-4xl'>your books</h1> */}
          <div className='flex flex-col my-6'>
            <label className='mb-2'>filter by name or title</label>
            <input
              className='rounded-full bg-sky-200 pl-4'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            {books.length > 0 ? (
              <div className='grid grid-cols-3 gap-4'>
                {filteredSearch.map((book) => (
                  <div className='my-6'>
                    <Cards key={book.id} data={book} />
                  </div>
                ))}
              </div>
            ) : (
              <div className='grid h-screen place-items-center text-2xl'>
                your book list is empty, begin adding?
              </div>
            )}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Books

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const prisma = new PrismaClient()
  const session = await getSession({ req: context.req })

  const books = await prisma.books.findMany({
    where: {
      userId: session?.user.id,
    },
  })
  return {
    props: { books },
  }
}
