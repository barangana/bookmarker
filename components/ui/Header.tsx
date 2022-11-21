import React from 'react'
import Link from 'next/link'

//TODO: Add login/logout layout after 'my-books'

export const Header = () => {
  return (
    <div className='container mx-auto p-6 bg-cyan-700'>
      <div className='flex items-center justify-between'>
        <Link href='/' passHref>
          APP NAME
        </Link>
        <div className='space-x-6'>
          <Link href='#' passHref>
            add book
          </Link>
          <Link href='/my-books' passHref>
            my books
          </Link>
        </div>
      </div>
    </div>
  )
}
