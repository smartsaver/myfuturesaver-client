import React from 'react'

const Section = ({ children, className = '', name = '' }) => {
  return (
    <section id={name} className={`Section section ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}

export default Section
