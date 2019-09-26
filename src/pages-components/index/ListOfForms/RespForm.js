import React from 'react'
import SurveyForm from '../../../components/SurveyForm'
import Section from '../SmartsaverSection'
import { respSurvey } from '../content/surveyFormsContent'

import './RespForm.css'

const RespForm = ({ isEnabled }) => {
  const { heading, intro, footer } = respSurvey
  return (
    <Section className="RespForm" name="resp-clb-application">
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

export default RespForm
