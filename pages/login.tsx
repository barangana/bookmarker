import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { LoginForm } from '../components/index'

const Login = () => {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'authenticated') {
    router.push('/booklist')
  } else {
    return (
      <>
        <Head>
          <title>bookmarker</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='description' content='Your personal digital library.' />
        </Head>
        <LoginForm />
      </>
    )
  }
}

export default Login
