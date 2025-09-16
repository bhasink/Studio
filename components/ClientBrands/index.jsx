'use client'

import Image from 'next/image'
import styles from './ClientBrands.module.css'

export default function ClientBrands() {
  const clients = [
    { id: 1, name: 'Client 1', image: '9new.png?v=4' },
    { id: 2, name: 'Client 2', image: '7.png' },
    { id: 3, name: 'Client 3', image: '2.png' },
    { id: 4, name: 'Client 4', image: '3.png' },
    { id: 5, name: 'Client 5', image: '16.png' },
    { id: 6, name: 'Client 6', image: '8.png' },
    { id: 7, name: 'Client 7', image: '1n.png' },
    { id: 8, name: 'Client 8', image: '18.png' },
    { id: 9, name: 'Client 9', image: '4.png' },
    { id: 10, name: 'Client 10', image: '6.png' },
    { id: 11, name: 'Client 11', image: '5.png' },
    { id: 12, name: 'Client 12', image: '10.png' },
    { id: 13, name: 'Client 13', image: '11new.png?v=22' },
    { id: 14, name: 'Client 14', image: '12.png' },
    { id: 15, name: 'Client 15', image: '13.png' },
    { id: 16, name: 'Client 16', image: '14.png' },
    { id: 17, name: 'Client 17', image: '21.png' },
    { id: 18, name: 'Client 18', image: '20.png' },
    { id: 19, name: 'Client 19', image: '17new.png?v=2' },
    { id: 20, name: 'Client 20', image: '15.png' },
    { id: 21, name: 'Client 21', image: '23.png' },
    { id: 22, name: 'Client 22', image: '22.png?v=2' },
    { id: 23, name: 'Client 23', image: '25.png?v=2' },
    { id: 24, name: 'Client 24', image: '24.png' },
  ]

  return (
    <section className={`whtpt pd-thm workbrn pd-topm ${styles.clientSection}`} id="clients">
      <div className="container">
        <div className="mainhd text-center">
          <h4 className={`cntheads ${styles.sectionTitle}`}>
            <span>Brands </span> we work with
          </h4>
        </div>
        
        <div className={`brandssld ${styles.brandsGrid}`}>
          <div className="row justify-content-center">
            {clients.map((client) => (
              <div key={client.id} className={`col-md-2 col-4 blk ${styles.brandItem}`}>
                <div className={styles.brandImageWrapper}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_B_API}/images/swclients/${client.image}`}
                    alt={client.name}
                    width={150}
                    height={100}
                    style={{
                      objectFit: 'contain',
                    }}
                    className={styles.brandImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}