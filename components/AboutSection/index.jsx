'use client'

import Image from 'next/image'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={`blpt whowres whtxt d-flex section1 ${styles.aboutSection}`} id="about">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-md-4 text-center position-relative">
            <h2 className={`mnsub ${styles.heading}`}>
              Who are{' '}
              <span className={`strsp ${styles.highlight}`}>
                <img 
                  src="/images/strokewe-yellow.png" 
                  alt="Decorative stroke"
                  width={100}
                  height={20}
                  className={styles.decorativeStroke}
                />
                we?
              </span>
            </h2>
            <div className="movablelines" />
          </div>
          <div className={`col-md-8 mwd-tx ${styles.content}`}>
            <p className={styles.description}>
              Dedicated in creating <span className={styles.emphasis}>quality content,</span><br /> 
              SW Studios fuses emotions with brand and<br /> 
              product stories to create timeless assets.
            </p>
            <p className={styles.description}>
              We're <span className={styles.emphasis}>young, full of energy,</span> and{' '}
              <span className={styles.emphasis}>passionate</span><br /> 
              about what we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}