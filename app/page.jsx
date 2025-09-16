'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedWork from '../components/FeaturedWork'
import ClientBrands from '../components/ClientBrands'
import ContactForm from '../components/ContactForm'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

export default function HomePage() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Set initial width after component mounts
    setWidth(window.innerWidth)
    
    function handleWindowSizeChange() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return (
    <>
      <Header />
      <div className='mainhome'>
        <HeroSection isMobile={isMobile} />
        <AboutSection />
        <FeaturedWork />
        <ClientBrands />
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}