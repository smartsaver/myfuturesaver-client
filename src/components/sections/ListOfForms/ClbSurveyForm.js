import React from 'react'
import SurveyForm from '../../SurveyForm'
import Section from '../../Section'
import { informationSurvey } from '../../../content/surveyFormsContent'

const SurveyMonkeyForm = ({ isEnabled }) => {
  const { heading, intro, footer, url } = informationSurvey
  return (
    <Section name="questionnaire" className="Section--blue">
      <header>
        <h2 className="title">{heading}</h2>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm
        isEnabled={isEnabled}
        overlayText="Read and agree to the terms of agreement before proceeding."
      >
        <iframe title="Questionnaire" src={url} />
      </SurveyForm>
      <footer
        className="content"
        dangerouslySetInnerHTML={{ __html: footer }}
      />
    </Section>
  )
}

export default SurveyMonkeyForm
