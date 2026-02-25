import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tagline">Modernizing Properties, Elevating Lives</p>
          <h1 className="hero-title">Elevate Asset Management</h1>
          <p className="hero-description">
            We transform dated properties into modern, comfortable homes for our tenants. 
            Your comfort and satisfaction are our foundation.
          </p>
          <div className="hero-cta">
            <Link to="/properties" className="btn btn-primary">
              View Our Properties
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Welcome to Elevate Asset Management</h2>
            <p>
              We are a small property management company focused on buying dated properties 
              and modernizing them for our tenants. We manage all of our properties ourselves 
              and are committed to growing our portfolio and expanding our reach.
            </p>
            <p>
              We believe our tenants are the foundation of our business and we treat them as family. 
              Every property we acquire undergoes a complete transformation, ensuring our tenants 
              have a beautiful, modern place to call home.
            </p>
            <Link to="/about" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose Elevate Asset Management?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Modernized Properties</h3>
              <p>Every property we manage has been completely renovated and modernized for your comfort.</p>
            </div>
            <div className="feature-card">
              <h3>Family-Focused</h3>
              <p>We treat our tenants like family, providing personalized service and care.</p>
            </div>
            <div className="feature-card">
              <h3>Direct Management</h3>
              <p>We manage all properties ourselves, ensuring quick response times and quality service.</p>
            </div>
            <div className="feature-card">
              <h3>Growing Portfolio</h3>
              <p>We're expanding our reach and continuously adding new, modernized properties.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

