'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="thmn-footer">
      <div className="desktop-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-6">
              <div className="row">
                <div className="col-md-4 col-12">
                  <h3>About Us</h3>
                  <ul>
                    <li><a href="#about">About</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-12">
                  <h3>Work with us</h3>
                  <ul>
                    <li>
                      <Link 
                        href="https://www.sociowash.com/career.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link href="/#clients">Clients</Link></li>
                    <li><Link href="/#getintouch">Get in Touch</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="footer-mail">
                <p className="locn">Delhi</p>
                <p>
                  E-40/ 7, Second Floor,<br />
                  Okhla Phase 2, New Delhi- 110020
                </p>
              </div>
              <div className="footer-mail">
                <p className="locn">Mumbai</p>
                <p>
                  2nd Floor, Plot, Powerweave House,<br /> 
                  27, Rd Number 11, M.I.D.C,<br /> 
                  Andheri East, Mumbai 400093
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrgts text-center text-lg-left">
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
                <p className="leftsxts">
                  Copyright © {currentYear}. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}