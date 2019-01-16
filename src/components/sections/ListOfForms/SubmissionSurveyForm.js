import React, { Component } from 'react'
import SurveyForm from '../../SurveyForm'
import Section from '../../Section'
import submissionContent from '../../../content/submissionContent'

class SubmissionSurveyForm extends Component {
  state = {
    isFormEnabled: false,
  }

  setFormEnabled(booleanValue) {
    if (typeof booleanValue !== 'boolean') return
    this.setState(() => ({ isFormEnabled: booleanValue }))
  }

  handleButtonClick = () => {
    this.setFormEnabled(true)
  }

  render() {
    const { heading, intro, url, footer } = submissionContent
    const isFormEnabled = this.props.isEnabled || this.state.isFormEnabled
    const { handleButtonClick } = this
    return (
      <Section
        name="submission-form"
        className="SubmissionSurveyForm Section--blue"
      >
        <header>
          <h2 className="title">{heading}</h2>
        </header>
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <button className="button is-warning" onClick={handleButtonClick}>
          I read the terms and ready to submit
        </button>
        <SurveyForm isEnabled={isFormEnabled}>
          <iframe title="Submission" src={url} />
        </SurveyForm>
        <footer
          className="content"
          dangerouslySetInnerHTML={{ __html: footer }}
        />
      </Section>
    )
  }
}

export default SubmissionSurveyForm
