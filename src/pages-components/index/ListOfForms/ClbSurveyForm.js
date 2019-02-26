import React from 'react'
import SurveyForm from '../../../components/SurveyForm'
import Section from '../SmartsaverSection'
import { informationSurvey } from '../content/surveyFormsContent'

const SurveyMonkeyForm = ({ isEnabled }) => {
  const { heading, intro, footer, url } = informationSurvey
  return (
    <Section name="questionnaire">
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
