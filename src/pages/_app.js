import '../../styles/globals.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import shortid from "shortid";

function Loading() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState(null)

  useEffect(() => {
    setImg('anim.gif')
    const handleStart = (url) => url !== router.asPath && setLoading(true)
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false)
        setImg(null)
      }, 2000)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  const getRandomKey = () => {
    return shortid.generate();
  }

  return (
    loading && (
      <>
        <RemoveScrollBar />
        <div className="spinner-wrapper">
          <div className="sub-lg">
            <div className="lgo">
              <img
                src={
                  `${process.env.NEXT_PUBLIC_B_API}`+ img
                }
                className="navbar-brand-img blg"
                alt="logo"
                style={{'display':'block'}}
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
  const [loading, setLoading] = useState(false);
  
  useEffect(() =>{
    setTimeout(() => setLoading(true), 2000);
   })

  return (
    <>

<Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <title>SWA Studios</title>
        </Head>


     {!loading ? (
<>
 <div className="spinner-wrapper">
          <div className="sub-lg">
            <div className="lgo">
              <img
                src={
                  `${process.env.NEXT_PUBLIC_B_API}anim.gif`
                }
                className="navbar-brand-img blg"
                alt="logo"
                style={{'display':'block'}}
              />
              <span></span>
            </div>
          </div>
        </div>
</>
) : (
 <>
 <Loading />
  <Component {...pageProps} />
 </>
)}
     
    </>
  )
}

export default MyApp