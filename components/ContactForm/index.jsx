'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { notification } from 'antd'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    looking: '',
    represent: '',
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return regex.test(email)
  }

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: type === 'error' ? 'Error!' : 'Success!',
      description: msg,
      duration: 5,
      placement: 'bottomRight',
      bottom: 65,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, mobile, looking, represent } = formData

    // Validation
    if (!name.trim()) {
      openNotificationWithIcon('error', 'Please enter your name!')
      return
    }

    if (!looking.trim()) {
      openNotificationWithIcon('error', 'Please enter what you are looking for!')
      return
    }

    if (!represent.trim()) {
      openNotificationWithIcon('error', 'Please enter who you represent!')
      return
    }

    if (!mobile.trim()) {
      openNotificationWithIcon('error', 'Please enter your mobile number!')
      return
    }

    if (!mobile.match(/[0-9]{10}/)) {
      openNotificationWithIcon('error', 'Please enter a valid 10-digit mobile number!')
      return
    }

    if (!email.trim()) {
      openNotificationWithIcon('error', 'Please enter your email!')
      return
    }

    if (!validateEmail(email)) {
      openNotificationWithIcon('error', 'Please enter a valid email address!')
      return
    }

    setLoading(true)

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API}/contact`, formData)

      setLoading(false)
      
      notification.success({
        message: 'Success!',
        description: 'Form has been submitted successfully!',
        duration: 4,
        placement: 'bottomRight',
        bottom: 65,
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        looking: '',
        represent: '',
      })

      router.push('/thanks')
    } catch (err) {
      setLoading(false)
      openNotificationWithIcon('error', 'Something went wrong. Please try again.')
      console.error('Contact form error:', err)
    }
  }

  return (
    <section className={`blpt lttalks pd-thm pd-topm ${styles.contactSection}`} id="getintouch">
      <div className="container align-self-center">
        <div className="mainhd text-center">
          <h4 className={`cntheads ${styles.sectionTitle}`}>
            <span>Impressed? </span> Let's talk!
          </h4>
        </div>
        
        <div className={`mnformsty ${styles.formContainer}`}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className="form-group row">
              <div className="col-md-2">
                <label className={styles.formLabel}>
                  <b>Hello, my name is</b>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className={`form-control ${styles.formInput}`}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="col-md-2 loolesscrf">
                <label className={styles.formLabel}>
                  <b>I'm looking for</b>
                </label>
              </div>
              <div className="col-md-3">
                <input
                  name="looking"
                  value={formData.looking}
                  onChange={handleChange}
                  type="text"
                  className={`form-control ${styles.formInput}`}
                  placeholder="What are you looking for?"
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-2">
                <label className={styles.formLabel}>
                  <b>I represent/work at</b>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  name="represent"
                  value={formData.represent}
                  onChange={handleChange}
                  type="text"
                  className={`form-control ${styles.formInput}`}
                  placeholder="Company or organization"
                  required
                />
              </div>
              <div className="col-md-2 loolesscrf">
                <label className={styles.formLabel}>
                  <b>Contact me on</b>
                </label>
              </div>
              <div className="col-md-3">
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  type="tel"
                  className={`form-control ${styles.formInput}`}
                  placeholder="Your mobile number"
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-2 dropleswdths">
                <label className={styles.formLabel}>
                  <b>Drop a mail at</b>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className={`form-control ${styles.formInput}`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="col-md-12 text-center">
                <button 
                  type="submit" 
                  className={`ytthemects ${styles.submitButton}`}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}