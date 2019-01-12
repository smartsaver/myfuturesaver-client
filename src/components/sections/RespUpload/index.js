import React, { Component } from 'react'
import Section from '../../Section'
import Notification from '../../Notification'
import RespUploadForm from './RespUploadForm'
import respUploadContent from '../../../content/respUploadContent'
import axios from 'axios'

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

  handleFormSubmit = async formData => {
    try {
      const { setIsFormLoading, setIsFormSuccess } = this
      // set form loading
      setIsFormLoading(true)
      await axios.post('http://localhost:3000/api/', formData)
      setIsFormLoading(false)
      setIsFormSuccess(true)
      // const { name, email, kidsNames, respStatementType, files } = formData
      // axios({
      //   baseURL: 'http://localhost:3000',
      //   url: '/api/messages',
      //   data: { name, email, kidsNames, respStatementType, files },
      //   headers: {
      //     'Content-Type': 'multipart/form',
      //   },
      // })
      //   .then(response => console.log(response))
      //   .catch(reject => console.log(reject))
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { heading, intro, footer } = respUploadContent
    const { handleFormSubmit } = this
    const { isFormLoading, isFormSuccess } = this.state
    return (
      <Section className="Section--blue">
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
