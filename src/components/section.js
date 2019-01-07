import React from 'react'
import './Section.css'

const Section = ({ children, className = '', name = '' }) => {
  return (
    <section id={name} className={`Section section ${className}`}>
      {children}
    </section>
  )
}

export default Section
