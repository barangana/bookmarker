import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: string
}

export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return variant === 'primary' ? (
    <button className='rounded-full bg-blue-200 p-3 px-6 text-xs'>
      {children}
    </button>
  ) : (
    <button className='rounded-full bg-blue-400 p-3 px-6 text-xs'>
      {children}
    </button>
  )
}
