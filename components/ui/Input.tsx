import React from 'react'

interface InputProps {
  type?: string
}

export const Input: React.FC<InputProps> = ({ type }) => {
  return <input className='rounded-full mb-4 pl-3' type={type} />
}
