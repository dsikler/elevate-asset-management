import React from 'react'

function Properties() {
  const properties = [
    {
      id: 'BM',
      name: 'Stow Single-Family Home',
      address: 'Stow, OH',
      type: 'Single Family',
      beforeImages: [
        '/BM_before1.jpeg',
        '/BM_before2.jpeg',
        '/BM_before3.jpeg',
        '/BM-before4.jpeg',
        '/BM_before5.jpeg'
      ],
      afterImages: [
        '/BM-after1.jpeg',
        '/BM_after2.jpeg',
        '/BM_after3.jpeg',
        '/BM_after4.jpeg',
        '/BM_after5.jpeg',
        '/BM_outside0.jpeg',
        '/BM_outside1.jpeg'
      ],
      features: [
        'Refinished original hardwood floors',
        'Brand new modern kitchen',
        'Updated bathroom with subway tile shower',
        'Large fenced-in backyard perfect for families and pets',
        'Fresh paint throughout'
      ],
      description: 'This Stow property showcases a complete transformation with attention to both interior elegance and outdoor living space. Original features meet modern design in this welcoming family home.'
    },
    {
      id: 'btown',
      name: 'Barberton Duplex',
      address: 'Barberton, OH',
      type: 'Duplex',
      beforeImages: [
        '/btown_before1.jpeg',
        '/btown_before3.jpeg',
        '/btown_before4.jpeg',
        '/btown_before5.jpeg'
      ],
      afterImages: [
        '/btown_after1.jpeg',
        '/btown_after2.jpeg',
        '/btown_after3.jpeg',
        '/btown_after4.jpeg',
        '/btown_after5.jpeg',
        '/btown_outside.jpeg'
      ],
      features: [
        'Beautifully refinished original hardwood floors',
        'Modernized kitchen with contemporary finishes',
        'Updated bathrooms and fresh paint throughout',
        'Established long-term rental',
        'Classic duplex providing reliable dual-income opportunity'
      ],
      description: 'This classic Barberton duplex features two rental units with distinct character. The upper unit has been completely renovated to blend original charm with modern updates, featuring beautifully refinished hardwood floors and contemporary finishes throughout. The lower unit maintains its traditional character and has been a stable long-term rental.'
    },
    {
      id: '506',
      name: 'Cuyahoga Falls Single-Family Home',
      address: 'Cuyahoga Falls, OH',
      type: 'Single Family',
      beforeImages: [
        '/506before1.jpeg',
        '/506before3.JPG',
        '/506before4.JPG',
        '/506before5.jpeg',
        '/506outside_before.JPG'
      ],
      afterImages: [
        '/506after2.jpeg',
        '/506after3.jpeg',
        '/506after4.jpeg',
        '/506after5.jpeg',
        '/506after6.jpeg',
        '/506outside_after.jpg'
      ],
      features: [
        'Fully modernized kitchen with updated appliances and finishes',
        'Modern farmhouse-style bathroom',
        'Privacy fence with dedicated dog run area',
        'Fresh paint throughout interior',
        'Completely updated exterior including new roof, windows, and siding'
      ],
      description: 'This single-family home has been completely transformed into a modern, move-in ready space. From the ground up, we\'ve renovated every detail to create a comfortable home with contemporary finishes and curb appeal.'
    }
  ]

  return (
    <div className="properties-page">
      <section className="properties-hero">
        <div className="container">
          <h1>Our Properties</h1>
          <p>Explore our portfolio of modernized rental properties</p>
        </div>
      </section>

      <section className="properties-list">
        <div className="container">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-header">
                <h2>{property.name}</h2>
                <p className="property-type">{property.type}</p>
              </div>

              <p className="property-description">{property.description}</p>

              <div className="property-features">
                <h3>Features:</h3>
                <ul>
                  {property.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="property-gallery">
                <div className="gallery-section">
                  <h3>Before</h3>
                  <div className="gallery-grid">
                    {property.beforeImages.map((image, index) => (
                      <div
                        key={index}
                        className="gallery-item"
                      >
                        <img
                          src={image}
                          alt={`${property.name} before ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          fetchpriority="low"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="gallery-section">
                  <h3>After</h3>
                  <div className="gallery-grid">
                    {property.afterImages.map((image, index) => (
                      <div
                        key={index}
                        className="gallery-item"
                      >
                        <img
                          src={image}
                          alt={`${property.name} after ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          fetchpriority="low"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Properties
