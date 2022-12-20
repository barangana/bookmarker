import { NextPage } from 'next'
import { Hero, Layout } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}

export default Home
