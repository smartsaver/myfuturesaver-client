import React, { useState } from 'react'
import './DangerWithDismiss.css'

/**
 * @param {String} className
 * @param {HTMLElement} message
 */

function DangerWithDismiss({ className = '', message = '' }) {
  const [isVisible, setVisible] = useState(true)

  const handleDismiss = () => {
    setVisible(false)
  }

  if (isVisible)
    return (
      <div className={`Notification notification is-danger ${className}`}>
        <button className="delete" onClick={handleDismiss}></button>
        <div className="container">{message}</div>
      </div>
    )
  else {
    return null
  }
}

export default DangerWithDismiss
