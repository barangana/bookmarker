import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
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
        // add db look up here
        // call loginUser function
        const { user } = await loginUser(credentials!)
        console.log(user)
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
    // find a way to get the id from session...
    // https://next-auth.js.org/getting-started/typescript
    session: ({ session, token }) => {
      return session
    },
  },
})
