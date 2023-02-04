import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import Image from 'next/image'
import HoverVideoPlayer from 'react-hover-video-player'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'

const Work = () => {
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

  return (
    <>
      <Header />
      <Head>
        <link rel="stylesheet" type="text/css" href="/themeblackstyle.css" />
      </Head>

      <section className="workshopareas">
        <div className="container">
          <div className="tabnormcta">
            <button
              onClick={() => filtersLoadMore('production')}
              className={
                courseMode == 'production'
                  ? 'btn-group btn-group-toggle active'
                  : 'btn-group btn-group-toggle'
              }
            >
              Production
            </button>
            <button
              onClick={() => filtersLoadMore('animation')}
              className={
                courseMode == 'animation'
                  ? 'btn-group btn-group-toggle active'
                  : 'btn-group btn-group-toggle'
              }
            >
              Animation
            </button>
            <button
              onClick={() => filtersLoadMore('photoshoot')}
              className={
                courseMode == 'photoshoot'
                  ? 'btn-group btn-group-toggle active'
                  : 'btn-group btn-group-toggle'
              }
            >
              Photoshoot
            </button>
          </div>

          <div
            className={
              courseMode == 'photoshoot'
                ? 'courseallpnsd vdo-sects picshots'
                : 'courseallpnsd vdo-sects'
            }
          >
            <div className="row">
              {productionData &&
                productionData.map((production, key) => (
                  <div key={key} className="col-md-4">
                    <div className='laysets'>
                    <img
                      src={
                        `${process.env.NEXT_PUBLIC_B_API}work/images/thumbnail/` +
                        production.thumbnail
                      }
                      className="img-fluid"
                    />
                    <h5>{production.name}</h5>
                    <p>{production.short_desc}</p>
                    <Link href={`work/${production.slug}`}>Read More</Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {total > 6 && (
            <div className="text-center pt-4">
              {filterCoursesLastPage ? (
                <p> Yay! you have seen all</p>
              ) : (
                <>
                  {loader ? (
                    <p> Loading ... .. .</p>
                  ) : (
                    <a onClick={filtersLoadMoreData} className="orangectathms">
                      View more
                    </a>
                  )}
                </>
              )}
            </div>
          )}

          {total <= 0 && (
            <div className="text-center pt-4">
              <p> Oops! No data available!!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Work
