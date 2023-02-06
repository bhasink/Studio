import '../../styles/globals.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function Loading() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true)
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false)
      }, 5000)

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
    )
  )
}

function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // const [loading, setLoading] = useState(true);

  // useEffect(() =>{
  //     setTimeout(() => setLoading(false), 1000);
  // })

  // useEffect(() => {

  //     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
  //     const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},1000);

  //     router.events.on('routeChangeStart', handleStart)
  //     router.events.on('routeChangeComplete', handleComplete)
  //     router.events.on('routeChangeError',  handleComplete)

  //     return () => {
  //         router.events.off('routeChangeStart', handleStart)
  //         router.events.off('routeChangeComplete', handleComplete)
  //         router.events.off('routeChangeError', handleComplete)
  //     }
  // })

  //     return (<>

  //     {loading == true ? (
  //         <div className='spinner-wrapper'>
  //                <div className='sub-lg'>
  //                 <div className='lgo'>
  //                 <img src="/images/logo.svg" className="navbar-brand-img" alt="logo" />

  //                 <span>
  //                 </span>

  //                 </div>
  //                 </div>
  // </div>
  //           ) :
  //     (
  //         <>
  //    <Component {...pageProps} />

  //         </>
  //     )}

  //     </>)

  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
