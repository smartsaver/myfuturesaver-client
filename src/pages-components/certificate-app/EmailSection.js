import React from 'react'
import EmailCertificateForm from './components/EmailCertificateForm'
import EmailCertificateFormContainer from './state/EmailCertificateFormContainer'

/**
 *
 * @param {string} title - section title
 * @param {function} onFormSubmit - emits email address to any function handler
 */

const EmailCertForm = EmailCertificateFormContainer(EmailCertificateForm)

const EmailSection = ({ title = 'Email this Certificate', onFormSubmit }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <EmailCertForm onSubmit={onFormSubmit} />
    </div>
  )
}

export default EmailSection
