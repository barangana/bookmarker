import { prisma } from '../../../utils/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const bookId = req.query.id
  if (req.method === 'DELETE') {
    const note = await prisma.books.delete({ where: { id: Number(bookId) } })
    res.json(note)
  } else {
    res.status(400).json({ message: 'Something went wrong' })
  }
}

export default handler
