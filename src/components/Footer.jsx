import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Elevate Asset Management</h3>
            <p>Modernizing properties for our tenants, one home at a time.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>
              <a href="tel:330-285-6035">330-285-6035</a>
            </p>
            <p>
              <a href="mailto:sikler.dan@gmail.com">sikler.dan@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elevate Asset Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

