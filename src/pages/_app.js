import '../../styles/globals.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { RemoveScrollBar } from 'react-remove-scroll-bar'

function Loading() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true)
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false)
      }, 500)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    loading && (
      <>
        <RemoveScrollBar />
        <div className="spinner-wrapper">
          <div className="sub-lg">
            <div className="lgo">
              <img
                src="/images/logo.svg"
                className="navbar-brand-img"
                alt="logo"
              />
              <span></span>
            </div>
          </div>
        </div>
      </>
    )
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp