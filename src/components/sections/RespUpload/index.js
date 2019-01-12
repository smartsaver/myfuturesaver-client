import React, { Component } from 'react'
import Section from '../../Section'
import RespUploadForm from './RespUploadForm'
import respUploadContent from '../../../content/respUploadContent'
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
    const { heading, intro, footer } = respUploadContent
    const { handleFormSubmit } = this
    return (
      <Section className="Section--blue">
        <h2 className="title">{heading}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <div className="columns">
          <div className="column is-half">
            <RespUploadForm onSubmit={handleFormSubmit} />
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: footer }} />
      </Section>
    )
  }
}

export default RespSubmission
