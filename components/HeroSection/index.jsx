'use client'

import { useEffect, useRef } from 'react'
import styles from './HeroSection.module.css'

export default function HeroSection({ isMobile }) {
  const videoRef = useRef(null)

  useEffect(() => {
    // Background color change effect on scroll
    const section1 = document.querySelector('.section1')
    if (section1) {
      const [red, green, blue] = [253, 106, 2]
      
      const handleScroll = () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 30
        y = y < 1 ? 1 : y
        const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
        section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className={`blpt homebannnerk revealer ${styles.heroSection}`}>
      <video
        ref={videoRef}
        id="vid"
        playsInline
        preload="auto"
        autoPlay
        muted
        loop
        className="videoadaptsdesktop"
        aria-label="Hero background video"
      >
        {isMobile ? (
          <source
            src={`${process.env.NEXT_PUBLIC_B_API}brandmobile.mp4?v=1`}
            type="video/mp4"
          />
        ) : (
          <source
            src={`${process.env.NEXT_PUBLIC_B_API}mvideo.mp4?v=4`}
            type="video/mp4"
          />
        )}
      </video>
      
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Creating Stories That Matter
          </h1>
          <p className={styles.heroSubtitle}>
            SW Studios fuses emotions with brand stories to create timeless assets
          </p>
        </div>
      </div>
    </section>
  )
}