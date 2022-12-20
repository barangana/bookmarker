import Link from 'next/link'
import React from 'react'
import { Button } from './Button'

//TODO: Add image once app is done.

export const Hero = () => {
  return (
    <div className='container mx-auto px-6'>
      <div className='grid grid-cols-2 my-16'>
        <div>
          <div className='pb-12 text-xl font-semibold'>
            The app for your home library.
          </div>
          <div className='pb-12 w-4/6'>
            Save all your favorite books in one place. Continue reading from
            where you last took off without a physical bookmark. Create notes
            about your books — Bookmarker is your digital library.
          </div>
          <Button variant='primary'>
            <Link href='/register'>Create an account</Link>
          </Button>
        </div>
        <div className='my-auto'>IMAGE</div>
      </div>
    </div>
  )
}
