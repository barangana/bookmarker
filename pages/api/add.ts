import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../utils/prisma'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId, title, pages, type, completed } = req.body
    await prisma.books.create({
      data: {
        userId,
        title,
        pages,
        type,
        completed,
      },
    })
    res.status(200).json({ message: req.body })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

export default handler
