import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import text from '../../utils/text.json'

interface RegisterFormData {
  email: string
  username: string
  password: string
}

const signupUser = async (data: RegisterFormData) => {
  try {
    fetch('http://localhost:3000/api/signup', {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
  } catch (error) {
    console.log(error)
  }
}

export const RegisterForm: React.FC = () => {
  const { push } = useRouter()
  const [formInfo, setFormInfo] = useState<RegisterFormData>({
    email: '',
    username: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  const handleSubmit = async (data: RegisterFormData) => {
    try {
      signupUser(data)
      push('/')
    } catch (error) {
      setMessage('something went wrong')
    }
  }

  return (
    <div className='grid place-items-center h-screen bg-sky-100'>
      <div className='container mx-auto'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(formInfo)
          }}
        >
          <div className='flex flex-col items-center'>
            <header className='pb-8 font-normal text-4xl'>bookmarker</header>
            <label>{text.email}</label>
            <input
              className='rounded-full mb-4 pl-3'
              onChange={(e) =>
                setFormInfo({ ...formInfo, email: e.target.value })
              }
            />
            <label>{text.username}</label>
            <input
              className='rounded-full mb-4 pl-3'
              onChange={(e) =>
                setFormInfo({ ...formInfo, username: e.target.value })
              }
            />
            <label>{text.password}</label>
            <input
              className='rounded-full mb-4 pl-3'
              type='password'
              onChange={(e) =>
                setFormInfo({ ...formInfo, password: e.target.value })
              }
            />
            <p>{message}</p>
            <div className='flex justify-between w-44 pt-6 pb-12'>
              <button
                className='rounded-full bg-blue-200 p-3 px-6 text-xs'
                type='submit'
              >
                {text.register}
              </button>
              <Link
                className='rounded-full bg-blue-400 p-3 px-6 text-xs'
                href='/login'
              >
                {text.login}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
