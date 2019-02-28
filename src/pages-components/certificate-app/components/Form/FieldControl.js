import React from 'react'

const FieldControl = ({ label, control }) => {
  return (
    <div className="field">
      {label}
      <div className="control">{control}</div>
    </div>
  )
}

export default FieldControl
