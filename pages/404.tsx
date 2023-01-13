import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Layout } from '../components'

const ErrorPage = () => {
  const session = useSession()
  const router = useRouter()

  return (
    <Layout>
      <div className='flex flex-col items-center h-screen justify-center'>
        <h1 className='pb-6'>404 - seems you lost the way</h1>
        <Button
          variant='primary'
          onClick={() => {
            if (session.status === 'authenticated') router.push('/booklist')
            else router.push('/')
          }}
        >
          head back
        </Button>
      </div>
    </Layout>
  )
}

export default ErrorPage
