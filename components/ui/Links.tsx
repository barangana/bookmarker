import React from 'react'
import Link from 'next/link'

interface LinkProps {
  href: string
  children: React.ReactNode
}

export const Links: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
      passHref
    >
      {children}
    </Link>
  )
}

export default Links
