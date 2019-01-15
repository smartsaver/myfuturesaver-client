import React, { Component } from 'react'
import Section from '../../Section'
import Notification from '../../Notification'
import RespUploadForm from './RespUploadForm'
import respUploadContent from '../../../content/respUploadContent'
import axios from 'axios'

import './RespUpload.css'

/* eslint-disable no-undef, no-console, jsx-a11y/label-has-for */
class RespSubmission extends Component {
  state = {
    isFormLoading: false,
    isFormSuccess: false,
  }

  setIsFormLoading = booleanValue => {
    // if not boolean value is passed, do nothing
    if (typeof booleanValue !== 'boolean') return
    this.setState(() => ({ isFormLoading: booleanValue }))
  }

  setIsFormSuccess = booleanValue => {
    // if not boolean value is passed, do nothing
    if (typeof booleanValue !== 'boolean') return
    this.setState(() => ({ isFormSuccess: booleanValue }))
  }

  makeEmailTemplate(formData) {
    // make email template based on FormData API
    const { name, email, kidsNames, respStatementType, files } = formData
    const from = 'Myfuturesaver.org <noreply@myfuturesaver.org>'
    const to = process.env.GATSBY_MAIL_RECIPIENT_EMAIL
    const subject = 'FutureSAVER Statement Submission'
    const text = `A FutureSAVER applicant has submitted their CLB Statement

Name: ${name}
Email: ${email}
Children: ${kidsNames}
Type of Statement: ${respStatementType}

Attachment Below.
Thank you.`
    const emailTemplate = new FormData()
    emailTemplate.append('from', from)
    emailTemplate.append('to', to)
    emailTemplate.append('subject', subject)
    emailTemplate.append('text', text)
    emailTemplate.append('attachment', files[0])
    return emailTemplate
  }

  handleFormSubmit = async formData => {
    const { setIsFormLoading, setIsFormSuccess, makeEmailTemplate } = this
    try {
      const baseURL = process.env.GATSBY_MAIL_SERVICE_BASE_URL
      const url = `${process.env.GATSBY_MAIL_URL}/clb-statement`
      // set form loading
      setIsFormLoading(true)
      // make the request to the server
      const resolve = await axios({
        method: 'post',
        baseURL,
        url,
        data: makeEmailTemplate(formData),
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log(resolve)
      // disable form loading in 'finally', and set form success
      setIsFormSuccess(true)
    } catch (reject) {
      // when things go wrong, stop form loading
      console.log(reject)
    } finally {
      // stop form loading
      setIsFormLoading(false)
    }
  }

  render() {
    const { heading, intro, footer } = respUploadContent
    const { handleFormSubmit } = this
    const { isFormLoading, isFormSuccess } = this.state
    return (
      <Section name="upload-clb" className="RespUpload Section--blue">
        <h2 className="title">{heading}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <div className="columns">
          <div className="column is-half">
            <RespUploadForm
              isLoading={isFormLoading}
              onSubmit={handleFormSubmit}
              isFormSuccess={isFormSuccess}
            />
          </div>
        </div>
        <Notification
          className="is-success"
          isHidden={!isFormSuccess}
          message="Successfully Submitted the form."
        />
        <div className="content" dangerouslySetInnerHTML={{ __html: footer }} />
      </Section>
    )
  }
}

export default RespSubmission
