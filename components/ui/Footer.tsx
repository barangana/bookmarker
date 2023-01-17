import React from 'react'
import text from '../../utils/text.json'

// TODO: Add more content to footer in the future
export const Footer = () => {
  return (
    <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-white'>
        © {new Date().getFullYear() + text.copyrights}
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-white sm:mt-0'>
        <li>
          <a href='/' className='mr-4 hover:underline md:mr-6 '>
            home
          </a>
        </li>
      </ul>
    </footer>
  )
}
