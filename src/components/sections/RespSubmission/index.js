import React, { Component } from 'react'
import Section from '../../Section'
import RespSubmissionForm from './RespSubmissionForm'
import respSubmissionContent from '../../../content/respSubmissionContent'
// import axios from 'axios'

/* eslint-disable no-undef, no-console, jsx-a11y/label-has-for */
class RespSubmission extends Component {
  handleFormSubmit = formState => {
    console.log(formState)
    // axios
    //   .post('http://localhost:3000/api/messages', {
    //     name,
    //     email,
    //   })
    //   .then(response => console.log(response))
    //   .catch(reject => console.log(reject))
  }

  render() {
    const { heading, intro } = respSubmissionContent
    const { handleFormSubmit } = this
    return (
      <Section className="Section--blue">
        <h2 className="title">{heading}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <div className="columns">
          <div className="column is-half">
            <RespSubmissionForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </Section>
    )
  }
}

export default RespSubmission
