import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export const Header = () => {
  const { status } = useSession()
  const router = useRouter()

  const handleLogout = () => {
    signOut({ redirect: true, callbackUrl: '/' })
    router.push('/')
  }

  return (
    <div className='container mx-auto p-6 bg-sky-200'>
      <div className='flex items-center justify-between'>
        <Link href='/' passHref>
          APP NAME
        </Link>
        {status === 'authenticated' ? (
          <div className='space-x-6'>
            <Link href='/add-book' passHref>
              add book
            </Link>
            <Link href='/my-books' passHref>
              my books
            </Link>
            <button onClick={handleLogout}>logout</button>
          </div>
        ) : (
          <div className='space-x-6'>
            <Link href='/login' passHref>
              login
            </Link>
            <Link href='/signup' passHref>
              register
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
