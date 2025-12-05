import React from 'react'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="about-subtitle">Our Story</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>
              Real estate isn't just an investment for us. It's where we get to roll up our sleeves and build something tangible.
            </p>
            <p>
              I learned the trades growing up from my father, and there's nothing I enjoy more than getting my hands dirty improving distressed properties and turning them into happy family rentals. I've been flipping distressed properties since I was 13 years old, and there's something deeply satisfying about transforming a neglected house into someone's home.
            </p>
            <p>
              At Elevate Asset Management, we take pride in doing the work ourselves. We're not a corporate management company. We're hands-on property owners who understand construction, value quality, and believe that our tenants deserve homes they can be proud of. Every renovation, every repair, every improvement comes from our own commitment to excellence.
            </p>
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

