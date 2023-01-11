import React from 'react'
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
  return (
    <Layout>
      {books.length > 0 ? (
        <div className='container mx-auto my-6'>
          <div className='grid grid-cols-3'>
            {books.map((book) => (
              <div className='pt-6'>
                <Cards key={book.id} data={book} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='grid h-screen place-items-center text-2xl'>
          your book list is empty, begin adding?
        </div>
      )}
    </Layout>
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
