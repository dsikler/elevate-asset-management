import React, { useState } from 'react'

function Properties() {
  // Helper function to calculate optimal grid columns
  const getGridColumns = (count) => {
    if (count <= 2) return count
    if (count === 3) return 3
    if (count === 4) return 2
    if (count === 5) return 2 // Will wrap to 3+2 for uniform rows
    if (count === 6) return 3
    if (count === 7) return 2 // Will wrap to 4+3 for uniform rows
    return 3 // Default to 3 columns for 8+
  }

  const properties = [
    {
      id: 'BM',
      name: 'Stow, OH Single Family',
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
        'Complete interior renovation',
        'Modern kitchen with new appliances',
        'Updated bathrooms',
        'New flooring throughout',
        'Fresh paint and finishes',
        'Landscaped exterior'
      ],
      description: 'This Stow single-family home showcases our commitment to complete property transformation. The renovation includes a fully modernized kitchen, updated bathrooms, new flooring, and beautiful exterior landscaping, creating a welcoming home environment.'
    },
    {
      id: 'btown',
      name: 'Barberton, OH Duplex',
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
        'Dual-unit modernization',
        'Updated kitchens in both units',
        'New bathrooms',
        'Fresh interior and exterior paint',
        'Improved landscaping',
        'Enhanced curb appeal'
      ],
      description: 'This duplex property in Barberton has undergone extensive modernization across both units. Each unit features updated kitchens, new bathrooms, fresh paint, and improved exteriors, providing comfortable living spaces for two families.'
    },
    {
      id: '506',
      name: 'Cuyahoga Falls, OH Single Family',
      address: 'Cuyahoga Falls, OH',
      type: 'Single Family',
      beforeImages: [
        '/506before1.jpeg',
        '/506outside_before.JPG'
      ],
      afterImages: [
        '/506after1.JPG',
        '/506after2.jpeg',
        '/506outside_after.jpg'
      ],
      features: [
        'Completely renovated interior',
        'Modern kitchen with updated appliances',
        'Fresh paint throughout',
        'Updated flooring',
        'Improved exterior curb appeal'
      ],
      description: 'This single-family home in Cuyahoga Falls has been completely transformed from a dated property into a modern, comfortable living space. The renovation includes a full kitchen update, new flooring, fresh paint, and exterior improvements.'
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
                  <div 
                    className="gallery-grid"
                    style={{
                      gridTemplateColumns: property.id === 'BM' && property.beforeImages.length === 5 
                        ? 'repeat(3, 1fr)' 
                        : `repeat(${getGridColumns(property.beforeImages.length)}, 1fr)`
                    }}
                  >
                    {property.beforeImages.map((image, index) => {
                      let gridStyle = {}
                      if (property.id === 'BM' && property.beforeImages.length === 5) {
                        // Layout: 2 in top row, 3 in second row
                        if (index < 2) {
                          // First row: 2 items in columns 1 and 2
                          gridStyle = { gridColumn: index === 0 ? '1 / 2' : '2 / 3', gridRow: '1 / 2' }
                        } else {
                          // Second row: 3 items in columns 1, 2, 3
                          const col = index - 1
                          gridStyle = { gridColumn: `${col} / ${col + 1}`, gridRow: '2 / 3' }
                        }
                      }
                      return (
                        <div 
                          key={index} 
                          className="gallery-item"
                          style={gridStyle}
                        >
                          <img 
                            src={image} 
                            alt={`${property.name} before ${index + 1}`}
                            loading="lazy"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="gallery-section">
                  <h3>After</h3>
                  <div 
                    className="gallery-grid"
                    style={{
                      gridTemplateColumns: property.id === 'BM' && property.afterImages.length === 7
                        ? 'repeat(3, 1fr)'
                        : `repeat(${getGridColumns(property.afterImages.length)}, 1fr)`
                    }}
                  >
                    {property.afterImages.map((image, index) => {
                      let gridStyle = {}
                      if (property.id === 'BM' && property.afterImages.length === 7) {
                        // Layout: 2 in top row, 3 in middle row, 2 in bottom row
                        if (index < 2) {
                          // First row: 2 items in columns 1 and 2
                          gridStyle = { gridColumn: index === 0 ? '1 / 2' : '2 / 3', gridRow: '1 / 2' }
                        } else if (index < 5) {
                          // Second row: 3 items in columns 1, 2, 3
                          const col = index - 1
                          gridStyle = { gridColumn: `${col} / ${col + 1}`, gridRow: '2 / 3' }
                        } else {
                          // Third row: 2 items in columns 1 and 2
                          gridStyle = { gridColumn: index === 5 ? '1 / 2' : '2 / 3', gridRow: '3 / 4' }
                        }
                      }
                      return (
                        <div 
                          key={index} 
                          className="gallery-item"
                          style={gridStyle}
                        >
                          <img 
                            src={image} 
                            alt={`${property.name} after ${index + 1}`}
                            loading="lazy"
                          />
                        </div>
                      )
                    })}
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

