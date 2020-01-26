import React from 'react'
import Layout from '../Components/Layout'

interface IHomeProps {
  path: string
}

const Home: React.FC<IHomeProps> = () => {
  return (
    <Layout>
      <div>Olá meu nome é Matheus</div>
    </Layout>
  )
}

export default Home
