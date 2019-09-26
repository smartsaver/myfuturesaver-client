import React from 'react'
import Section from '../SmartsaverSection'
import applyOnlineContent from '../content/applyOnlineContent'

import './TermsOfAgreement.css'

const TermsOfAgreement = ({ onSubmit, isAccepted }) => {
  const { intro, termsOfAgreement, heading } = applyOnlineContent
  const isFormHidden = isAccepted ? 'is-hidden' : ''
  return (
    <Section name="terms-of-agreement" className="TermsOfAgreement">
      <h2 className="title is-3">{heading}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <div className="box">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: termsOfAgreement }}
        ></div>
        <div className="overlay"></div>
      </div>
      <form onSubmit={onSubmit} className={isFormHidden}>
        <div className="field">
          <div className="control">
            <label className="checkbox" htmlFor="termsOfAgreementCheckbox">
              <input
                name="termsOfAgreementCheckbox"
                type="checkbox"
                id="termsOfAgreementCheckbox"
              />{' '}
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Section>
  )
}

export default TermsOfAgreement
