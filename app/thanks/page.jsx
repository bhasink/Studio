'use client'

import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ThanksPage() {
  return (
    <>
      <Header />
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Thank You!
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            We have received your message and will get back to you soon.
          </p>
          <Link 
            href="/" 
            style={{
              background: 'linear-gradient(45deg, #fd6a02, #ffa500)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              transition: 'transform 0.3s ease'
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}