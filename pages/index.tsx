import { NextPage } from 'next'
import { Hero, Layout, Features } from '../components'

const Home: NextPage = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </div>
  )
}

export default Home
