import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginUser } from '../../../utils'

export default NextAuth({
  pages: {
    signIn: '/login',
  },
  jwt: {
    maxAge: 60 * 60, // 1 hour,
    secret: 'PLACEHOLDER',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const { user } = await loginUser(credentials!)
        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },

    session: async ({ session, token }) => {
      if (session) {
        session.user.id = token.sub ? token.sub : ''
      }
      return session
    },
  },
})
