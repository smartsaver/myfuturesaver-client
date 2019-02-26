import React from 'react'

const Footer = ({ children, className = '' }) => {
  return (
    <footer id="contact" className={`footer Footer ${className}`}>
      <div className="container">{children}</div>
    </footer>
  )
}

export default Footer
