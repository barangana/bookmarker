import { useState } from 'react'
import { Button } from '../ui/Button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

interface UserInfo {
  username: string
  password: string
}

export const LoginForm = () => {
  const router = useRouter()
  const [formInfo, setFormInfo] = useState<UserInfo>({
    username: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      username: formInfo.username,
      password: formInfo.password,
      redirect: false,
    })

    if (res?.error) {
      console.log('error')
      setMessage('error')
    } else {
      router.push('/')
    }
  }

  return (
    <div className='grid place-items-center h-screen bg-sky-100'>
      <div className='container mx-auto'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-center'>
            <label>username</label>
            <input
              className='rounded-full mb-4 pl-3'
              onChange={(e) =>
                setFormInfo({ ...formInfo, username: e.target.value })
              }
            />
            <label>password</label>
            <input
              className='rounded-full mb-4 pl-3'
              type='password'
              onChange={(e) =>
                setFormInfo({ ...formInfo, password: e.target.value })
              }
            />
            <p>{message}</p>
            <div className='flex justify-between w-44 pt-6 pb-12'>
              <Button variant='primary'>login</Button>
              <Button>register</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
