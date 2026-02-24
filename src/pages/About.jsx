import React from 'react'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <p className="about-subtitle">Who We Are</p>
          <h1>About Us</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>
              Real estate isn't just an investment for us. It's our passion, our craft, and our legacy.
            </p>
            <p>
              Growing up learning the trades from my father, I discovered early on that there's nothing more satisfying than transforming a neglected property into a place families are proud to call home. Since flipping my first distressed property at 13 years old, I've been hooked on the challenge of seeing potential where others see problems.
            </p>
            <p>
              At Elevate Asset Management, we're not your typical property management company. We're the ones in work boots, getting our hands dirty on every renovation. We're hands-on property owners who live and breathe construction, understand what quality looks like, and believe our tenants deserve nothing less than homes they can truly be proud of. Every nail we hammer, every wall we paint, every detail we perfect reflects our personal commitment to excellence.
            </p>
          </div>

          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality First</h3>
                <p>We never cut corners. Every renovation is executed with meticulous attention to detail using quality materials that stand the test of time.</p>
              </div>
              <div className="value-card">
                <h3>Respect &amp; Trust</h3>
                <p>Our tenants aren't just customers. They're the foundation of our business. We build lasting relationships based on mutual respect, dignity, and trust.</p>
              </div>
              <div className="value-card">
                <h3>Always Responsive</h3>
                <p>Direct management means direct access. When you need us, you reach the owners, not a call center. Fast response times and personalized service aren't promises, they're our standard.</p>
              </div>
              <div className="value-card">
                <h3>Thoughtful Growth</h3>
                <p>We're expanding our portfolio strategically, acquiring properties that align with our vision. Growth never comes at the expense of our high standards or personal touch.</p>
              </div>
            </div>
          </div>

          <div className="about-approach">
            <h2>Our Approach</h2>
            <p>
              We don't believe in surface-level fixes. When we acquire a property, we commit to comprehensive transformation. Not just making it rentable, but making it a home.
            </p>
            <p>
              Every project includes modernized kitchens with quality appliances, updated bathrooms with contemporary finishes, refinished or new flooring, fresh paint in welcoming colors, and exterior improvements that create genuine curb appeal. We treat every property as if our own family would live there, because to us, that's exactly what quality means.
            </p>
            <p>
              Our direct management model eliminates the frustration of middlemen and corporate red tape. You get a direct line to the people who own and care for your home. No transferred calls, no waiting for approvals, no runaround. Just honest, reliable service from people who are personally invested in your satisfaction.
            </p>
            <p>
              Because at the end of the day, we're not just managing properties. We're building homes and relationships that last.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

