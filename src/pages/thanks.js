import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header2 from '../../components/header/header2'
import Footer2 from '../../components/footer/footer2'
import Image from 'next/image'
import HoverVideoPlayer from 'react-hover-video-player'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'
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
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { notification } from 'antd'
gsap.registerPlugin(ScrollTrigger);

const Thanks = () => {

  const [featuredItem, setFeaturedItem] = useState([])
  const [featuredItemShoot, setFeaturedItemShoot] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [looking, setLooking] = useState('')
  const [represent, setRepresent] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const [red, green, blue] = [253, 106, 2]
    const section1 = document.querySelector('.section1')
    window.addEventListener('scroll', () => {
      let y = 1 + (window.scrollY || window.pageYOffset) / 30
      y = y < 1 ? 1 : y
      const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
      section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
  }, [])


  useEffect(() => {

    if (router.isReady) {
      const _id = router.query._id
      getFeaturedItem()
    }
  }, [router.isReady])


  const getFeaturedItem = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/featured-work`,
      )

      console.log(data)

      const getF_data = data.data.get_featured_work
      const getF_data_Shoot = data.data.get_featured_work_shoot
      
      setFeaturedItem(getF_data)
      setFeaturedItemShoot(getF_data_Shoot)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name == '') {
      openNotificationWithIcon('error', 'Please enter the name!')
      return false
    }

    
    if (looking == '') {
      openNotificationWithIcon('error', 'Please enter the looking for field!')
      return false
    }

    if (represent == '') {
      openNotificationWithIcon('error', 'Please enter the represent field!')
      return false
    }

    if (mobile == '') {
      openNotificationWithIcon('error', 'Please enter the mobile!')
      return false
    }

    if (!mobile.match('[0-9]{10}')) {
      openNotificationWithIcon('error', 'Please enter the valid mobile number!')
      return false
    }


    if (email == '') {
      openNotificationWithIcon('error', 'Please enter the email!')
      return false
    }

    if (IsEmail(email) == false) {
      openNotificationWithIcon('error', 'Please enter the correct email!')
      return false
    }

    setLoading(true)

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/contact`,
        {
          name,
          email,
          mobile,
          looking,
          represent
        },
      )

      setLoading(false)

      notification['success']({
        message: 'success!',
        description: 'Form has been submitted successfully!',
        duration: 4,
        placement: 'bottomRight',
        bottom: 65,
      })

      router.push('/thanks')
    } catch (err) {
      setLoading(false)
    }
  }

  const IsEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regex.test(email)) {
      return false
    } else {
      return true
    }
  }

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: 'Error!',
      description: msg,
      duration: 5,
      placement: 'bottomRight',
      bottom: 65,
    })
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
        items: 1,
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
        margin:30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
      },
    },
  }



  return (
    <>
      <Header2 />

      <Head>
        <link rel="stylesheet" type="text/css" href="/themeblackstyle.css" />
      </Head>

  <section className="blpt whowres whtxt d-flex section1">
    <div className="container align-self-center">
      <div className="row">

       
        <div className="col-md-12 text-center position-relative">
        <br /><br /><br />
          <h2 className="mnsub">Thanks! 
          </h2>
          
          <h5>
          Form has been submitted successfully.
          </h5>
        
        </div>
   
      </div>
    </div>
  </section>

  <Footer2 />


    
      {/* <Footer /> */}
    </>
  )
}

export default Thanks
