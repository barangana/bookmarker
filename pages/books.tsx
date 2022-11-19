import React from 'react'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps, NextPage } from 'next'

interface BooksProps {
  books: [
    {
      id: number
      title: string
      pages: number
      finished: boolean
    }
  ]
}

const Books: NextPage<BooksProps> = ({ books }) => {
  console.log(books)
  return (
    <div>
      Books PAGE
      {books.map((book) => (
        <div>{book.title}</div>
      ))}
    </div>
  )
}

export default Books

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()

  const books = await prisma.books.findMany()
  return {
    props: { books },
  }
}
