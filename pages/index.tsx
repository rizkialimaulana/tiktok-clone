import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../components/content'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout, selectUser } from '../redux/userSlice'
import React, { useEffect } from 'react'
import { auth } from '../firebase'

const Home: NextPage = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])

  console.log(user)
  return (
    <div>
      <Head>
        <title>Tiktok Clone</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.ico" />
      </Head>
      <Header />
      <main className="md:px-10 flex relative">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
}

export default Home
