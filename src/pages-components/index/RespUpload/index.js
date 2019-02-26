import React, { Component } from 'react'
import Section from '../SmartsaverSection'
import Notification from '../../../components/Notification'
import RespUploadForm from './RespUploadForm'
import respUploadContent from '../content/respUploadContent'
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

  makeEmailTemplate(jsonData) {
    // make email template based on FormData API
    const { name, email, kidsNames, respStatementType, files } = jsonData
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

  sendEmailWithAttachment = async senderDetails => {
    const baseURL = process.env.GATSBY_MAIL_SERVICE_BASE_URL
    const url = `${process.env.GATSBY_MAIL_URL}/clb-statement`
    return await axios({
      method: 'post',
      baseURL,
      url,
      data: this.makeEmailTemplate(senderDetails),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  sendSuccessEmail = async senderDetails => {
    const baseURL = process.env.GATSBY_MAIL_SERVICE_BASE_URL
    const url = `${process.env.GATSBY_MAIL_URL}/clb-statement-success`
    const { email } = senderDetails
    const data = {
      from: 'Myfuturesaver.org <noreply@myfuturesaver.org>',
      to: email,
      subject: 'Thank you for Submitting your CLB Statement',
      text: `Dear Family,

Thank you for submitting your statement!

You will receive an email within 2-3 days. The email will confirm your eligibility to receive a gift from SmartSAVER for completing the process, and how to receive the funds.

Questions? Call all us at 1-855-737-7252 or by email at info@smartsaver.org.

The SmartSAVER Team`,
    }
    return await axios({
      method: 'post',
      baseURL,
      url,
      data,
    })
  }

  handleFormSubmit = async senderDetails => {
    const {
      setIsFormLoading,
      setIsFormSuccess,
      sendEmailWithAttachment,
      sendSuccessEmail,
    } = this
    try {
      // set form loading
      setIsFormLoading(true)
      // make the request to the server
      const resolve = await sendEmailWithAttachment(senderDetails)
      console.log(resolve)
      // disable form loading, and set form success to true
      setIsFormLoading(false)
      setIsFormSuccess(true)
      // send success email
      await sendSuccessEmail(senderDetails)
    } catch (reject) {
      // when things go wrong, stop form loading
      console.log(reject)
    } finally {
      // stop form loading when something goes wrong
      setIsFormLoading(false)
    }
  }

  render() {
    const { heading, intro, footer } = respUploadContent
    const { handleFormSubmit } = this
    const { isFormLoading, isFormSuccess } = this.state
    return (
      <Section name="upload-clb" className="RespUpload">
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
