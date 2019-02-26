import React from 'react'

const FormFieldControl = ({ children }) => {
  return (
    <div className="field">
      <div className="control">{children}</div>
    </div>
  )
}

export default FormFieldControl
