import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../components/content'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tiktok Clone</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className='md:px-10 flex'>
        <Sidebar />
        <Content />
      </main>
    </div>
  )
}

export default Home
