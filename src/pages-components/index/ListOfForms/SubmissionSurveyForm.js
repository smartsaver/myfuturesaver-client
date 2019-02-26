import React, { Component } from 'react'
import SurveyForm from '../../../components/SurveyForm'
import Section from '../SmartsaverSection'
import submissionContent from '../content/submissionContent'

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
    const { isFormEnabled } = this.state
    const { handleButtonClick } = this
    return (
      <Section name="submission-form" className="SubmissionSurveyForm">
        <header>
          <h2 className="title">{heading}</h2>
        </header>
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <button className="button is-warning" onClick={handleButtonClick}>
          I am ready to submit
        </button>
        <SurveyForm
          isEnabled={isFormEnabled}
          overlayText={'Click "I am ready to submit" button to proceed.'}
        >
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
