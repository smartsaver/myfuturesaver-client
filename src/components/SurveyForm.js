import React from 'react'

import './SurveyForm.css'

const SurveyForm = ({ isEnabled, children, overlayText = '' }) => {
  const isFormDisabled = !isEnabled ? 'SurveyForm--disabled' : ''
  return (
    <div className={`SurveyForm ${isFormDisabled}`}>
      {children}
      <span className="SurveyForm__overlay has-text-danger">{overlayText}</span>
    </div>
  )
}

export default SurveyForm
