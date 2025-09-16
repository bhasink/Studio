'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios'

export default function WorkPage() {
  const [workItems, setWorkItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getWorkItems()
  }, [])

  const getWorkItems = async () => {
    try {
      // Placeholder for actual API call
      // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/work`)
      // setWorkItems(data.work)
      
      // Mock data for now
      setWorkItems([
        {
          id: 1,
          name: 'Brand Campaign',
          slug: 'brand-campaign',
          thumbnail: 'placeholder.jpg',
          short_desc: 'A creative brand campaign that tells a compelling story.',
        },
        {
          id: 2,
          name: 'Product Launch',
          slug: 'product-launch',
          thumbnail: 'placeholder.jpg',
          short_desc: 'An innovative product launch video that captivated audiences.',
        }
      ])
      setLoading(false)
    } catch (err) {
      console.error('Error fetching work items:', err)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h2>Loading our work...</h2>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '4rem 0' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          Our <span style={{ color: '#fd6a02' }}>Work</span>
        </h1>
        
        <div className="row">
          {workItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}>
                <Link href={`/work/${item.slug}`}>
                  <div style={{ position: 'relative', height: '200px' }}>
                    <Image
                      src="/images/placeholder.jpg"
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>{item.name}</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{item.short_desc}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}