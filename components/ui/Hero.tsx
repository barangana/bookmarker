import Link from 'next/link'
import React from 'react'
import { Button } from './Button'
import text from '../../utils/text.json'
import Image from 'next/image'

//TODO: Add image once app is done.

export const Hero = () => {
  return (
    <div className='container mx-auto px-6 bg-sky-100'>
      <div className='grid grid-cols-2'>
        <div className='my-32 mx-32'>
          <div className='pb-12 text-xl font-semibold'>{text.hero_title}</div>
          <div className='pb-12 w-4/6'>{text.hero_description}</div>
          <Button variant='primary'>
            <Link href='/signup'>{text.hero_button}</Link>
          </Button>
        </div>
        <Image
          className='my-auto'
          src='/images/features.jpg'
          width='300'
          height='300'
          alt='image'
        />
      </div>
    </div>
  )
}
