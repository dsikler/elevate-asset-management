import React from 'react'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="about-subtitle">Our Story & Mission</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>
              Elevate Asset Management was founded with a simple yet powerful vision: 
              to transform dated properties into modern, comfortable homes that our tenants 
              can be proud to call their own.
            </p>
            <p>
              We started as a small property management company, but our commitment to 
              excellence and our tenant-first approach has driven our growth. We don't just 
              manage properties, we invest in them, modernize them, and care for them as if 
              they were our own homes.
            </p>
          </div>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <p className="mission-statement">
                We are a small property management company focused on buying dated properties 
                and modernizing them for our tenants. We manage all of our properties ourselves 
                and are looking to grow our portfolio and expand our reach.
              </p>
              <p className="mission-core">
                <strong>We believe our tenants are the foundation of our business and we treat them as family.</strong>
              </p>
            </div>
          </div>

          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🏡</div>
                <h3>Quality</h3>
                <p>We never cut corners. Every renovation is done with attention to detail and quality materials.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Respect</h3>
                <p>We treat our tenants with respect and dignity, building lasting relationships based on trust.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3>Responsiveness</h3>
                <p>We manage all properties directly, ensuring quick response times and personalized service.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">📈</div>
                <h3>Growth</h3>
                <p>We're committed to expanding our portfolio while maintaining our high standards and personal touch.</p>
              </div>
            </div>
          </div>

          <div className="about-approach">
            <h2>Our Approach</h2>
            <p>
              When we acquire a new property, we don't just make cosmetic changes. We perform 
              comprehensive modernizations that transform dated spaces into contemporary homes. 
              From updated kitchens and bathrooms to fresh paint, new flooring, and improved 
              exteriors, we ensure every property meets our high standards before welcoming tenants.
            </p>
            <p>
              Our direct management approach means you'll always have a direct line to the owners. 
              No middlemen, no delays, just honest, reliable service from people who care about 
              your home as much as you do.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

