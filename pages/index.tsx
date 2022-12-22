import { NextPage } from 'next'
import { Hero, Layout, Features } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </div>
  )
}

export default Home
