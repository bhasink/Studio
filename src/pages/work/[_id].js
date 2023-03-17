import { useState, useEffect } from 'react'
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
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Autoplay, FreeMode, Navigation, Pagination } from 'swiper'

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

const WorkDetails = () => {
  const [WorkDetails, setWorkDetails] = useState([])
  const [galleryImages, setGalleryImages] = useState([])
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
      var gallery_original_image

      if (getWorkDetails.gallery_original_image != '') {
        gallery_original_image = getWorkDetails.gallery_original_image.split(
          ',',
        )
      } else {
        gallery_original_image = 0
      }

      if (getWorkDetails == null) {
        router.push('/404')
      }

      setWorkDetails(getWorkDetails)
      setGalleryImages(gallery_original_image)
    } catch (err) {
      console.log(err)
    }
  }

  const opts = {
    height: '500',
    width: '80%',
    playerVars: {
      autoplay: 0,
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
        margin: 10,
        autoWidth: true,
        nav: true,
        dots: false,
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
        items: 4,
        nav: true,
        margin: 10,
        autoWidth: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
      },
    },
  }

  const Itm = (itm) => {
    $('#' + itm).trigger('click')
  }

  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }

  return (
    <>
      <Header />
      <Head>
        <link rel="stylesheet" type="text/css" href="/themeblackstyle.css" />
      </Head>

      {WorkDetails && WorkDetails != null && (
        
<div className='mainhome'>
          <section className="mt-5 pd-5 gallerybooths">
            <div className="mainhd text-center">
              <h4 className="cntheads">
                {WorkDetails.name}{' '}
                <span>
                  {WorkDetails.file_type == 'photoshoot' ? 'Photoshoot' : ''}

                  {WorkDetails.file_type == 'animation' ? 'Video' : ''}

                  {WorkDetails.file_type == 'production' ? 'Video' : ''}
                </span>{' '}
              </h4>
            </div>

            <div className="videomanys">
              {galleryImages.length > 0 && (
                <>
                  <LightGallery speed={500} plugins={[lgThumbnail]} mobileSettings={{showCloseIcon: true}}>
                    {galleryImages &&
                      galleryImages.map((gImage, key) => (
                        <div
                          id={'item' + key}
                          className="item"
                          href={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_original/${gImage}`}
                        >
                          <img
                            style={{ display: 'none' }}
                            alt={WorkDetails.name}
                            src={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_res/${gImage}`}
                          />
                        </div>
                      ))}
                  </LightGallery>

                  <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    freeMode={true}
                    controls={true}
                    showCloseIcon = {true}
                    slidesOffsetAfter={0}
                    navigation={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}

                   
                   // navigation={true}
                    modules={[Autoplay, Pagination, Navigation, FreeMode]}
                    className="mySwiper"
                    grabCursor={true}
                  >
                    {galleryImages &&
                      galleryImages.map((gImage, key) => (
                        <SwiperSlide>
                          <img
                            key={key}
                            onClick={() => Itm('item' + key)}
                            className="item"
                            alt={gImage}
                            src={`${process.env.NEXT_PUBLIC_B_API}work/images/gallery_thumbnail_res/${gImage}`}
                          />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </>
              )}

              {WorkDetails.file_type == 'production' && (
                <>
                  <div className='setvdframes'>
                  <YouTube videoId={WorkDetails.original_video} opts={opts} />
                  </div>
                </>
              )}

              {WorkDetails.file_type == 'animation' && (
                <>
                <div className='setvdframes'>
                  <YouTube videoId={WorkDetails.original_video} opts={opts} />
                  </div>
                </>
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
          </div>
        
      )}

      <Footer />
    </>
  )
}

export default WorkDetails
