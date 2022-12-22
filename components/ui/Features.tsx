import Image from 'next/image'
import React from 'react'

//TODO: Change placholder image once done, fix responsiveness

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
            <div className='font-bold'>Save your books in one place</div>
            <div className='mb-6 lg:w-96'>
              Bookmarker allows you to store all the books you have read or are
              reading into one location without ever getting lost.
            </div>
            <div className='font-bold'>Bookmark from any device</div>
            <div className='mb-6 lg:w-96'>
              Storing your books can be done on PC, Mobile, Tablet, Laptop and
              more.
            </div>
            <div className='font-bold'>
              Never forget where you last took off
            </div>
            <div className='mb-6 lg:w-96'>
              With Bookmarker, you can save the last page you were reading
              without having to use a physical bookmark.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
