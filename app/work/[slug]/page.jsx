'use client'

import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function WorkDetailPage() {
  const params = useParams()
  const slug = params?.slug

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '4rem 0', minHeight: '60vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Work Detail
        </h1>
        <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>
          <p>Work item: <strong>{slug}</strong></p>
          <p>This page will display detailed information about the selected work item.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}