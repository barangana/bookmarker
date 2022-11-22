import React from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export const LoginForm = () => {
  return (
    <div className='grid place-items-center h-screen bg-sky-100'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <label>username</label>
          <Input />
          <label>password</label>
          <Input type='password' />
          <div className='flex justify-between w-44 pt-6 pb-12'>
            <Button variant='primary'>login</Button>
            <Button>register</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
