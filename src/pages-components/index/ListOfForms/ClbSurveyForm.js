import React from 'react'
import SurveyForm from '../../../components/SurveyForm'
import Section from '../SmartsaverSection'
import { informationSurvey } from '../content/surveyFormsContent'

import './ClbSurveyForm.css'

const ClbSurveyForm = ({ isEnabled }) => {
  const { heading, intro, footer } = informationSurvey
  return (
    <Section className="ClbSurveyForm" name="questionnaire">
      <header>
        <h2 className="title">{heading}</h2>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm
        isEnabled={isEnabled}
        overlayText="Read and agree to the terms of agreement before proceeding."
      >
        <div className="box"></div>
      </SurveyForm>
      <footer
        className="content"
        dangerouslySetInnerHTML={{ __html: footer }}
      />
    </Section>
  )
}

export default ClbSurveyForm
