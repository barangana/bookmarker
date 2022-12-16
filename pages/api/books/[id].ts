import { prisma } from '../../../utils/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const bookId = req.query.id
  if (req.method === 'DELETE') {
    const book = await prisma.books.delete({ where: { id: Number(bookId) } })
    res.json(book)
  }
  if (req.method === 'PUT') {
    const book = await prisma.books.update({
      where: { id: Number(bookId) },
      data: {
        favorite: true,
      },
    })
    res.json(book)
  } else {
    res.status(400).json({ message: 'Something went wrong' })
  }
}

export default handler
