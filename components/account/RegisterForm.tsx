import { useState } from 'react'

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

const handleSubmit = async (data: RegisterFormData) => {
  try {
    signupUser(data)
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const RegisterForm: React.FC = () => {
  const [formInfo, setFormInfo] = useState<RegisterFormData>({
    email: '',
    username: '',
    password: '',
  })
  const [message, setMessage] = useState('')

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
            <label>email</label>
            <input
              className='rounded-full mb-4 pl-3'
              onChange={(e) =>
                setFormInfo({ ...formInfo, email: e.target.value })
              }
            />
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
              <button className='rounded-full bg-blue-200 p-3 px-6 text-xs'>
                login
              </button>
              <button
                className='rounded-full bg-blue-200 p-3 px-6 text-xs'
                type='submit'
              >
                register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
