'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.norm')
      if (nav) {
        const scroll = window.scrollY
        if (scroll >= 50) {
          nav.classList.remove('norm')
          nav.classList.add('navfixed')
        } else {
          nav.classList.remove('navfixed')
          nav.classList.add('norm')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`site-header topmain mobexheight norm ${!isMenuOpen ? 'heightexps' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              className="navbar-brand-img"
              src={`${process.env.NEXT_PUBLIC_B_API}/images/swlogo.svg`}
              alt="SW Studios Logo"
              width={180}
              height={37}
              priority
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto position-relative" id="menu-center">
              <li className="nav-item submno">
                <Link 
                  onClick={handleToggle} 
                  className={`nav-link ${pathname === '/work' ? 'active' : ''}`} 
                  href="/work"
                >
                  WORK
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  onClick={handleToggle} 
                  className="nav-link" 
                  href="/#clients"
                >
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  onClick={handleToggle} 
                  className="nav-link" 
                  href="/#getintouch"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>

            <div className="copyrgts text-center mobilemnon">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="socials">
                      <ul>
                        <li>
                          <a 
                            href="https://instagram.com/swstudiosofficial?igshid=YmMyMTA2M2Y=" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Follow us on Instagram"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-8 text-center text-lg-right">
                    <p className="leftsxts">Copyright © 2024. Business Entity: Sociowash. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleToggle} 
            className={`navbar-toggler openhdas ${!isMenuOpen ? 'crossshwos' : ''}`} 
            type="button"
            aria-label="Toggle navigation menu"
          >
            <i className="fal fa-bars" />
            <i className="fal fa-times" />
          </button>
        </div>
      </nav>
    </header>
  )
}