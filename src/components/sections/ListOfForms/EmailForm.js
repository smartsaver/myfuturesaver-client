import React from 'react'
import Section from '../../Section'
import { email } from '../../../content/surveyFormsContent'
import MailChimpForm from './MailChimpForm'

const EmailForm = ({ isEnabled }) => {
  const { intro, heading, helpNoEmail, helpWhyEmail } = email
  return (
    <Section className="Section--blue" name="email-form">
      <header>
        <h2 className="title">{heading}</h2>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <MailChimpForm isEnabled={isEnabled} />
      <footer>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: helpWhyEmail }}
        />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: helpNoEmail }}
        />
      </footer>
    </Section>
  )
}

export default EmailForm
