import React, { ChangeEvent } from 'react'

interface InputProps {
  type?: 'text' | 'password' | 'number' | 'checkbox'
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({ type, onChange }) => {
  return (
    <input className='rounded-full mb-4 pl-3' type={type} onChange={onChange} />
  )
}
