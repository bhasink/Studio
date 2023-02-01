import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import Image from 'next/image'
import HoverVideoPlayer from 'react-hover-video-player'
import { useRouter } from 'next/router'
import axios from 'axios'
import YouTube from 'react-youtube';

const WorkDetails = () => {
  const [productionData, setProductionData] = useState([])
  const [courseMode, setCourseMode] = useState('production')
  const [filterCoursesLastPage, setFilterCoursesLastPage] = useState(false)
  const [loader, setLoader] = useState(false)
  const [currentPageFilter, setCurrentPageFilter] = useState(1)
  const [total, setTotal] = useState(1)

  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const _id = router.query._id
      listing()
      //   console.log(router.query)
    }
  }, [router.isReady])

  const listing = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/listing`)

      const get_production_data = data.data.get_production_data.data
      setProductionData(get_production_data)
      setTotal(data.data.get_production_data.total)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const filtersLoadMore = async (data) => {
    let type
    setFilterCoursesLastPage(false)
    setCurrentPageFilter(2)

    if (data == 'production') {
      type = 'production'
      setCourseMode('production')
    } else if (data == 'short-video') {
      type = 'short-video'
      setCourseMode('short-video')
    } else if (data == 'animation') {
      type = 'animation'
      setCourseMode('animation')
    } else if (data == 'photoshoot') {
      type = 'photoshoot'
      setCourseMode('photoshoot')
    } else {
      type = ''
      setCourseMode('')
    }

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/filter-data`,
        {
          type: type,
        },
        config,
      )

      const get_work = data.data.get_work.data
      setProductionData(get_work)
      setTotal(data.data.get_work.total)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const filtersLoadMoreData = async (data) => {
    setCurrentPageFilter(currentPageFilter + 1)
    setLoader(true)

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/filter-data?page=${currentPageFilter}`,
        {
          type: courseMode,
        },
        config,
      )

      const get_work = data.data.get_work.data
      const get_work_last_page = data.data.get_work.last_page

      setProductionData((oldArray) => [...oldArray, ...get_work])

      if (get_work_last_page == currentPageFilter) {
        setFilterCoursesLastPage(true)
      }

      setLoader(false)

      console.log(data)
    } catch (err) {
      console.log(err)
      setLoader(false)
    }
  }

  const opts = {
    height: '450',
    width: '80%',
    playerVars: {
      autoplay: 1,
      modestbranding:1,
      rel:0,
    },
  };

  const _onReady = (event) => {
    event.target.playVideo();
  }

  return (
    <>
      <Header />

  <section className="mt-5 pd-5">
    <div className="mainhd text-center mt-5 mb-0">
      <h4 className="cntheads">Tinder <span>Photoshoot </span> </h4>
    </div>
    <div className="videomanys">	

    <YouTube videoId="FzxnqZP85g4" opts={opts} onReady={_onReady} />



      <div className="videopgsl owl-carousel owl-theme">
        <div className="item">
          <img src="./images/photoshoot/1.jpg" className="img-fluid" />
        </div>
        <div className="item">
          <img src="./images/photoshoot/2.jpg" className="img-fluid" />
        </div>
        <div className="item">
          <img src="./images/photoshoot/3.jpg" className="img-fluid" />
        </div>
        <div className="item">
          <img src="./images/photoshoot/4.jpg" className="img-fluid" />
        </div>
        <div className="item">
          <img src="./images/photoshoot/5.jpg" className="img-fluid" />
        </div>
        <div className="item">
          <img src="./images/photoshoot/1.jpg" className="img-fluid" />
        </div>
        <div className="item">
          <img src="./images/photoshoot/2.jpg" className="img-fluid" />
        </div>
        <div className="item">
          <img src="./images/photoshoot/3.jpg" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section className="workshopareas profiledesc">
    <div className="container">
      <div className="courseallpnsd vdo-sects vddetails">
        <div className="row">
          <div className="col-md-12">
            <h5>Objective</h5>
            <p>Refresh and recharge with BroCode with a dip of nostalgia. </p>
          </div>
          <div className="col-md-12">
            <h5>Insight</h5>
            <p>Everyone instantly relates to Mario since everyone has played it and knows it in and out. The asset becomes instantaneously
              interesting with a brand twist. </p>
          </div>
          <div className="col-md-12">
            <h5>Our Approach</h5>
            <p>Gaming and beer often go hand in hand, the brand brings it together with the legendary Mario game. </p>
          </div>
        </div>
      </div>
    </div>
  </section>

      <Footer />
    </>
  )
  
}


export default WorkDetails
