import React from 'react'
import EmailCertificateForm from './components/EmailCertificateForm'

/**
 *
 * @param {string} title
 */

const EmailSection = ({ title = 'Email the Certificate' }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <EmailCertificateForm />
    </div>
  )
}

export default EmailSection
