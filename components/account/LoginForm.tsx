import { useState } from 'react'
import { Button } from '../ui/Button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Input } from '../ui/Input'
import text from '../../utils/text.json'

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
            <label>{text.username}</label>
            <Input
              onChange={(e) =>
                setFormInfo({ ...formInfo, username: e.target.value })
              }
            />
            <label>{text.password}</label>
            <Input
              type='password'
              onChange={(e) =>
                setFormInfo({ ...formInfo, password: e.target.value })
              }
            />
            <p>{message}</p>
            <div className='flex justify-between w-44 pt-6 pb-12'>
              <Button variant='primary'>{text.login}</Button>
              <Link
                className='rounded-full bg-blue-400 p-3 px-6 text-xs'
                href='/signup'
                passHref
              >
                {text.register}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
