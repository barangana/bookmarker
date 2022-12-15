import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: string
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLElement>
  as?: 'button' | 'a'
}

export const Button: React.FC<ButtonProps> = ({ children, variant, type }) => {
  return variant === 'primary' ? (
    <button className='rounded-full bg-blue-200 p-3 px-6 text-xs' type={type}>
      {children}
    </button>
  ) : (
    <button className='rounded-full bg-blue-400 p-3 px-6 text-xs' type={type}>
      {children}
    </button>
  )
}
