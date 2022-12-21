import React from 'react'
import text from '../../utils/text.json'

// TODO: Add more content to footer in the future
export const Footer = () => {
  return (
    <div className='container mx-auto bg-sky-200'>
      <div className='grid place-items-center'>
        <div className='text-sm'>
          © {new Date().getFullYear() + text.copyrights}
        </div>
      </div>
    </div>
  )
}
