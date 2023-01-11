import { useEffect } from 'react'
import { BookForm, Layout } from '../../components'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import { Book } from '../../utils/types/types'

interface BookProps {
  book: Book
  sessionId: string
}

const Book: NextPage<BookProps> = ({ book, sessionId }) => {
  const router = useRouter()

  useEffect(() => {
    if (book.userId !== sessionId) router.push('/404')
  }, [])

  return (
    <Layout>
      <BookForm book={book} mode='edit' bookId={book.id} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const session = await getSession({ req: req })
  const sessionId = session?.user.id
  const bookId = params?.id?.[0] ? parseInt(params?.id?.[0]) : 0
  const book = await prisma?.books.findUnique({
    where: {
      id: bookId,
    },
  })
  return {
    props: { book, sessionId },
  }
}

export default Book
