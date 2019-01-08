import React from 'react'
import SurveyForm from '../../SurveyForm'
import Section from '../../Section'
import { respSurvey } from '../../../content/surveyFormsContent'

const RespForm = ({ isEnabled }) => {
  const { heading, intro, footer, url } = respSurvey
  return (
    <Section name="resp-clb-application" className="Section--blue">
      <header>
        <h2 className="title">{heading}</h2>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm isEnabled={isEnabled}>
        <iframe title="Questionnaire" src={url} />
      </SurveyForm>
      <footer
        className="content"
        dangerouslySetInnerHTML={{ __html: footer }}
      />
    </Section>
  )
}

export default RespForm
