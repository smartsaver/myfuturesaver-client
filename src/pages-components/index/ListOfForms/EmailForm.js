import React from 'react'
import Section from '../SmartsaverSection'
import { email } from '../content/surveyFormsContent'

import './EmailForm.css'

const EmailForm = () => {
  const { intro, heading, helpNoEmail, helpWhyEmail } = email
  return (
    <Section className="EmailForm" name="email-form">
      <header>
        <h2 className="title">{heading}</h2>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <div className="box"></div>
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
