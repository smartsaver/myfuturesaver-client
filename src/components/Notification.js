import React from 'react'

const Notification = ({ message = '', className = '', isHidden = false }) => {
  return isHidden ? null : (
    <div className={`notification ${className}`}>{message}</div>
  )
}

export default Notification
