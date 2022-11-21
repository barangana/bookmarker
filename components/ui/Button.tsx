import React from 'react'

//TODO: Add fonts
//TODO: Add variants

interface ButtonProps {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='rounded-full bg-blue-200 p-3 px-6 text-xs'>
      {children}
    </button>
  )
}
