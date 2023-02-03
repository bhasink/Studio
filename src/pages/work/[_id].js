import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'
import YouTube from 'react-youtube'
import ReactHtmlParser from 'react-html-parser'
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

const WorkDetails = () => {
  const [WorkDetails, setWorkDetails] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const _id = router.query._id
      getWorkDetails(_id)
    }
  }, [router.isReady])

  const getWorkDetails = async (_id) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-work-details`,
        {
          slug: _id,
        },
        config,
      )

      const getWorkDetails = data.get_work_details

      if (getWorkDetails == null) {
        router.push('/404')
      }

      setWorkDetails(getWorkDetails)
    } catch (err) {
      console.log(err)
    }
  }

  const opts = {
    height: '450',
    width: '50%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  }

  const state = {
    responsive_hrngcomps: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 3,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },

      766: {
        items: 3,
        nav: false,
        dots: false,
        loop: true,
      },

      1200: {
        items: 6,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
      },
    },
  }

  
const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
 
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
 ];

  return (
    <>
      <Header />
      <Head>
        <link rel="stylesheet" type="text/css" href="/themeblackstyle.css" />
      </Head>


      {WorkDetails && WorkDetails != null && (
        <>
          <section className="mt-5 pd-5 gallerybooths">
            <div className="mainhd text-center">
              <h4 className="cntheads">
                {WorkDetails.name}{' '}
                <span>
                  {WorkDetails.file_type == 'photoshoot'
                    ? 'Photoshoot'
                    : 'Video'}
                </span>{' '}
              </h4>
            </div>
            <div className="videomanys">
              {WorkDetails.file_type == 'photoshoot' ? (
                <OwlCarousel
                  className="videopgsl owl-carousel owl-theme"
                  loop
                  responsive={state.responsive_hrngcomps}
                  nav
                >
                  <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    <div
                      className="item"
                      href={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_original/1.jpg`}
                    >
                      <img
                        alt="img1"
                        src={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_original/1.jpg`}
                      />
                    </div>

                  <div
                    className="item"
                    href={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_original/1.jpg`}
                  >
                    <img
                      alt="img1"
                      src={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_original/1.jpg`}
                    />
                  </div>

                  <div
                    className="item"
                    href={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_original/1.jpg`}
                  >
                    <img
                      alt="img1"
                      src={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_original/1.jpg`}
                    />
                  </div>

                  </LightGallery>

                </OwlCarousel>
              ) : (
                <YouTube videoId={WorkDetails.original_video} opts={opts} />
              )}
            </div>
          </section>
          <section className="workshopareas profiledesc">
            <div className="container">
              <div className="courseallpnsd vdo-sects vddetails">
                <div className="row">
                  {ReactHtmlParser(WorkDetails.description)}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  )
}

export default WorkDetails
