import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this to a backend
    // For now, we'll use mailto as a fallback
    const mailtoLink = `mailto:elevateassetmgmt@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${formData.email}`
    window.location.href = mailtoLink
    setFormStatus('Thank you! Your message has been sent.')
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setFormStatus('')
    }, 5000)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="about-subtitle">Get In Touch</p>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                Have questions about our properties? Interested in renting? 
                Want to learn more about our services? We'd love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:330-285-6035">330-285-6035</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:elevateassetmgmt@gmail.com">elevateassetmgmt@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-hours">
                <h3>Response Time</h3>
                <p>We typically respond within 24 hours during business days.</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {formStatus && (
                  <div className="form-status success">
                    {formStatus}
                  </div>
                )}

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

