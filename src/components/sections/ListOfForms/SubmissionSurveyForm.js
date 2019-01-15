import React from 'react'
import SurveyForm from '../../SurveyForm'
import Section from '../../Section'
import submissionContent from '../../../content/submissionContent'

const SubmissionSurveyForm = ({ isEnabled }) => {
  const { heading, intro, url, footer } = submissionContent
  return (
    <Section
      name="submission-form"
      className="SubmissionSurveyForm Section--blue"
    >
      <header>
        <h2 className="title">{heading}</h2>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm isEnabled={isEnabled}>
        <iframe title="Submission" src={url} />
      </SurveyForm>
      <footer
        className="content"
        dangerouslySetInnerHTML={{ __html: footer }}
      />
    </Section>
  )
}

export default SubmissionSurveyForm
