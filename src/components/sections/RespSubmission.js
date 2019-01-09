import React, { Component } from 'react'
import Section from '../Section'
import respSubmissionContent from '../../content/respSubmissionContent'
import axios from 'axios'

/* eslint-disable no-undef, no-console */
class RespSubmission extends Component {
  state = {
    name: '',
    email: '',
    files: '',
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const email = this.state.email
    axios({
      method: 'post',
      url: `${process.env.GATSBY_MAILGUN_BASE_URL}/${
        process.env.GATSBY_MAILGUN_DOMAIN_NAME
      }/messages`,
      auth: {
        username: 'api',
        password: `${process.env.GATSBY_MAILGUN_DEV_API_KEY}`,
      },
      params: {
        from: `Awesome Development Team <noreply@${
          process.env.GATSBY_MAILGUN_DOMAIN_NAME
        }>`,
        to: email,
        subject: 'Hello',
        text: 'Welcome to the team!',
      },
    })
      .then(response => {
        console.log('success response', response)
      })
      .catch(reject => {
        console.log('fail response', reject)
      })
  }

  updateName = event => {
    const { value } = event.target
    this.setState(() => ({ name: value }))
  }

  updateEmail = event => {
    const { value } = event.target
    this.setState(() => ({ email: value }))
  }

  handleFileChange = event => {
    if (!event.target.files) return ''
    const files = event.target.files
    this.setState(() => ({ files }))
  }

  displayFileName = () => {
    const fileName = this.state.files
    if (fileName === '') return 'No file Selected.'
    return fileName[0].name
  }

  render() {
    const { intro, heading } = respSubmissionContent
    const { name, email } = this.state
    const { updateName, updateEmail, displayFileName, handleFileChange } = this
    return (
      <Section className="Section--blue">
        <h2 className="title">{heading}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <form method="POST" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="control">
              <label htmlFor="name" className="label">
                Name:
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={updateName}
                />
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="email" className="label">
                Email:
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={updateEmail}
                  required
                />
              </label>
            </div>
          </div>
          <div className="field">
            <div className="label">Statement of Account:</div>
            <div className="control">
              <div className="file has-name">
                {/* eslint-disable jsx-a11y/label-has-for */}
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload" />
                    </span>
                    <span className="file-label">Choose a file…</span>
                  </span>
                  <span className="file-name">{displayFileName()}</span>
                </label>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </Section>
    )
  }
}

export default RespSubmission
