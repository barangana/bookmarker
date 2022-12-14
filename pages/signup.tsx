import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { RegisterForm } from '../components'

const Signup = () => {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'authenticated') {
    router.push('/my-books')
  } else {
    return <RegisterForm />
  }
}

export default Signup
