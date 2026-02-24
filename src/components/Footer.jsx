import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Elevate Asset Management</h3>
          <p>Modernizing properties for our tenants, one home at a time.</p>
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <a href="tel:330-285-6035">330-285-6035</a>
          <span className="footer-divider">|</span>
          <a href="mailto:elevateassetmgmt@gmail.com">elevateassetmgmt@gmail.com</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elevate Asset Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
