import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import text from '../../utils/text.json'

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
          {text.app_name}
        </Link>
        {status === 'authenticated' ? (
          <div className='space-x-6'>
            <Link href='/add-book' passHref>
              {text.add_book}
            </Link>
            <Link href='/my-books' passHref>
              {text.my_books}
            </Link>
            <button onClick={handleLogout}>{text.logout}</button>
          </div>
        ) : (
          <div className='space-x-6'>
            <Link href='/login' passHref>
              {text.login}
            </Link>
            <Link href='/signup' passHref>
              {text.register}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
