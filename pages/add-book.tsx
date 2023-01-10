import React from 'react'
import { BookForm, Layout } from '../components'
import { getSession } from 'next-auth/react'
import { GetServerSideProps, NextPage } from 'next'

interface AddBookProps {
  sessionId: string
}

const AddBook: NextPage<AddBookProps> = ({ sessionId }) => {
  return (
    <Layout>
      <BookForm sessionId={sessionId} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const session = await getSession({ req: context.req })
  const sessionId = session?.user.id
  return {
    props: { sessionId },
  }
}

export default AddBook
