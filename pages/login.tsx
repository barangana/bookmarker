import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { LoginForm } from '../components/index'

const Login = () => {
  const { status } = useSession()
  const router = useRouter()
  if (status === 'authenticated') {
    router.push('/my-books')
  } else {
    return <LoginForm />
  }
}

export default Login
