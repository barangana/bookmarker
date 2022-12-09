import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../utils/prisma'
import { hash } from 'bcrypt'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, username, password } = req.body
    const hashedPassword = await hash(password, 10)
    await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    })
    console.log(req.body)
    res.status(200).json({ message: req.body })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

export default handler
