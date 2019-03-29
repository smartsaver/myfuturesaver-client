import React from 'react'
import EmailCertificateForm from './components/EmailCertificateForm'
import EmailCertificateFormContainer from './state/EmailCertificateFormContainer'

/**
 *
 * @param {string} title
 */

const EmailCertForm = EmailCertificateFormContainer(EmailCertificateForm)

const EmailSection = ({ title = 'Email this Certificate' }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <EmailCertForm />
    </div>
  )
}

export default EmailSection
