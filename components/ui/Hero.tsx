import Link from 'next/link'
import React from 'react'
import { Button } from './Button'
import text from '../../utils/text.json'

//TODO: Add image once app is done.

export const Hero = () => {
  return (
    <div className='container mx-auto px-6'>
      <div className='grid grid-cols-2 my-16'>
        <div>
          <div className='pb-12 text-xl font-semibold'>{text.hero_title}</div>
          <div className='pb-12 w-4/6'>{text.hero_description}</div>
          <Button variant='primary'>
            <Link href='/register'>{text.hero_button}</Link>
          </Button>
        </div>
        <div className='my-auto'>IMAGE</div>
      </div>
    </div>
  )
}
