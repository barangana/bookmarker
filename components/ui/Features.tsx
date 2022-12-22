import Image from 'next/image'
import React from 'react'
import text from '../../utils/text.json'

//TODO: Change placholder image once done, fix responsiveness, make the title and text into components possibly?

export const Features = () => {
  return (
    <div className='container mx-auto bg-sky-100'>
      <div className='flex gap-x-12 justify-center'>
        <div className='pr-16 hidden md:block my-auto'>
          <Image
            src='/images/features.jpg'
            alt='features'
            height='378'
            width='400'
          />
        </div>
        <div>
          <div className='my-36'>
            <div className='font-bold'>{text.features_title_1}</div>
            <div className='mb-6 lg:w-96'>{text.features_description_1}</div>
            <div className='font-bold'>{text.features_title_2}</div>
            <div className='mb-6 lg:w-96'>{text.features_description_2}</div>
            <div className='font-bold'>{text.features_title_3}</div>
            <div className='mb-6 lg:w-96'>{text.features_description_3}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
