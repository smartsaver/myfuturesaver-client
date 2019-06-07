import React from 'react'

/**
 *
 * @param {Object} label - Any react element
 * @param {Object} control - Any react element
 */

const FieldControl = ({ label, control }) => {
  return (
    <div className="field">
      {label}
      <div className="control">{control}</div>
    </div>
  )
}

export default FieldControl
