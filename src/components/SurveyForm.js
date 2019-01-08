import React from 'react'

import './SurveyForm.css'

const SurveyForm = ({ isEnabled, children }) => {
  const isFormDisabled = !isEnabled ? 'SurveyForm--disabled' : ''
  return (
    <div className={`SurveyForm ${isFormDisabled}`}>
      {children}
      <span className="SurveyForm__overlay has-text-danger">
        Read and agree to the terms of agreement before proceeding.
      </span>
    </div>
  )
}

export default SurveyForm
