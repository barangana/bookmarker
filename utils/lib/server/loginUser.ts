import { User } from '@prisma/client'
import { prisma } from '../../../utils/prisma'

interface UserLoginData {
  username: string
  password: string
}

export const loginUser = async ({
  username,
  password,
}: UserLoginData): Promise<{ user: User | null }> => {
  const user = await prisma.user.findUnique({
    where: { username },
  })

  if (!user) {
    return {
      user: null,
    }
  }

  return { user }
}
