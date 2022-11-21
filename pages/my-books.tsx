import React from 'react'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps, NextPage } from 'next'
import { Book } from '../utils/types'
import { Layout } from '../components'

//TODO: Once Next13 has a stable build, migrate to Next13 data fetching
//TODO: Figure out how when user logs in, they get all their books.

interface BooksProps {
  books: [Book]
}

const Books: NextPage<BooksProps> = ({ books }) => {
  console.log(books)
  return (
    <Layout>
      Books PAGE
      {books.map((book) => (
        <div>{book.title}</div>
      ))}
    </Layout>
  )
}

export default Books

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()

  const books = await prisma.books.findMany({
    where: { userId: '212e227c-1b1e-4462-9e7c-bf4adc89a968' },
  })
  return {
    props: { books },
  }
}
