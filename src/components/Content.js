import React from 'react'

const Content = ({ html = '', className = '' }) => {
  return (
    <div
      className={`content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Content
