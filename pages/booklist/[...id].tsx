import React from 'react'
import { AddBookForm, Layout } from '../../components'
import { GetServerSideProps, NextPage } from 'next'
import { Book } from '../../utils/types/types'

interface BookProps {
  book: Book
}

const Book: NextPage<BookProps> = ({ book }) => {
  console.log(book)
  return (
    <Layout>
      <AddBookForm book={book} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const bookId = params?.id?.[0] ? parseInt(params?.id?.[0]) : 0
  const book = await prisma?.books.findUnique({
    where: {
      id: bookId,
    },
  })
  return {
    props: { book },
  }
}

export default Book
