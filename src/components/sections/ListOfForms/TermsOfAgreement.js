import React from 'react'
import Section from '../../Section'
import applyOnlineContent from '../../../content/applyOnlineContent'

import './TermsOfAgreement.css'

const TermsOfAgreement = () => {
  const { intro, termsOfAgreement } = applyOnlineContent
  return (
    <Section
      name="terms-of-agreement"
      className="TermsOfAgreement Section--blue"
    >
      <h2 className="title is-3">Terms of Agreement</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <form>
        <article
          className="box content"
          dangerouslySetInnerHTML={{ __html: termsOfAgreement }}
        />
      </form>
    </Section>
  )
}

export default TermsOfAgreement
