'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import dynamic from 'next/dynamic'
import styles from './FeaturedWork.module.css'

// Dynamically import components that require client-side rendering
const HoverVideoPlayer = dynamic(() => import('react-hover-video-player'), {
  ssr: false,
})

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})

export default function FeaturedWork() {
  const [featuredItem, setFeaturedItem] = useState([])
  const [featuredItemShoot, setFeaturedItemShoot] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFeaturedItem()
  }, [])

  const getFeaturedItem = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/featured-work`
      )

      const getF_data = data.data.get_featured_work
      const getF_data_Shoot = data.data.get_featured_work_shoot

      setFeaturedItem(getF_data)
      setFeaturedItemShoot(getF_data_Shoot)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching featured work:', err)
      setLoading(false)
    }
  }

  const carouselOptions = {
    responsive: {
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
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
      },
    },
  }

  if (loading) {
    return (
      <section className={`whtpt latestwrk pd-thm pd-topm ${styles.loadingSection}`}>
        <div className="container">
          <div className={styles.loading}>Loading featured work...</div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className={`whtpt latestwrk pd-thm pd-topm ${styles.featuredSection}`}>
        <div className="container">
          <div className="mainhd text-center">
            <h4 className={`cntheads ${styles.sectionTitle}`}>
              <span>Our </span> latest work
            </h4>
          </div>
        </div>

        {featuredItem &&
          featuredItem.map((featuredItm, key) => (
            <div className={`vdo-sects ${styles.videoSection}`} id={'hover-target' + key} key={key}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 vdopls">
                    <Link href={`work/${featuredItm.slug}`}>
                      <HoverVideoPlayer
                        videoSrc={
                          `${process.env.NEXT_PUBLIC_B_API}work/videos/short-video/` +
                          featuredItm.short_video
                        }
                        hoverTarget={() =>
                          document.getElementById('hover-target' + key)
                        }
                        loadingStateTimeout={1000}
                        pausedOverlay={
                          <Image
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}work/images/thumbnail/` +
                              featuredItm.thumbnail
                            }
                            alt={featuredItm.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{
                              objectFit: 'cover',
                            }}
                            className="vdtms"
                          />
                        }
                        loadingOverlay={
                          <div className={styles.loadingOverlay}>Loading...</div>
                        }
                        restartOnPaused
                        preload="metadata"
                      />
                    </Link>
                  </div>
                  <div className={`col-md-6 ${styles.workContent}`}>
                    <h5 className={styles.workTitle}>{featuredItm.name}</h5>
                    <p className={styles.workDescription}>{featuredItm.short_desc}</p>
                    <Link href={`work/${featuredItm.slug}`} className={styles.readMoreLink}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className={`morevdo ${styles.moreWork}`}>
          <div className="container">
            <Link href="/work" className={`mnsub ${styles.moreLink}`}>
              View more{' '}
              <span className="strsp">
                <img src="/images/strokewe-yellow.png" alt="" width={100} height={20} />
                work{' '}
              </span>{' '}
              <img src="/images/mrarr-yellow.png" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      {featuredItemShoot.length > 0 && (
        <section className={`blpt mprojs whowres whtxt ${styles.photoshootSection}`}>
          <div className="container align-self-center">
            <div className="mainhd text-center">
              <h4 className={`cntheads ${styles.sectionTitle}`}>
                <span>Photoshoot </span> projects
              </h4>
            </div>

            <OwlCarousel
              className="whygridsphn owl-carousel owl-theme"
              loop
              responsive={carouselOptions.responsive}
              nav
            >
              {featuredItemShoot &&
                featuredItemShoot.map((featuredItemSht, key) => (
                  <div className="item" key={key}>
                    <Link href={`work/${featuredItemSht.slug}`}>
                      <Image
                        src={
                          `${process.env.NEXT_PUBLIC_B_API}work/images/thumbnail/` +
                          featuredItemSht.thumbnail
                        }
                        alt={featuredItemSht.name}
                        width={400}
                        height={300}
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                      <div className="bdorg" />
                      <h6>{featuredItemSht.name}</h6>
                      <p>{featuredItemSht.short_desc.substring(0, 200)}</p>
                    </Link>
                  </div>
                ))}
            </OwlCarousel>
          </div>
        </section>
      )}
    </>
  )
}