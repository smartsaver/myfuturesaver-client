import React, { Component, createRef } from 'react'
import Section from '../Section'
import respSubmissionContent from '../../content/respSubmissionContent'

class RespSubmission extends Component {
  state = {
    name: '',
    email: '',
    fileName: '',
  }

  fileRef = createRef()

  handleFormSubmit = () => {}

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
    const fileName = event.target.files[0].name
    this.setState(() => ({ fileName }))
  }

  displayFileName = () => {
    const fileName = this.state.fileName
    if (fileName === '') return 'No file Selected'
    return fileName
  }

  render() {
    const { intro, heading } = respSubmissionContent
    const { name, email } = this.state
    const {
      updateName,
      updateEmail,
      fileRef,
      displayFileName,
      handleFileChange,
    } = this
    return (
      <Section className="Section--blue">
        <h2 className="title">{heading}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <form onSubmit={this.handleFormSubmit}>
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
              <label htmlFor="name" className="label">
                Email:
                <input
                  type="email"
                  id="name"
                  className="input"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={updateEmail}
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
                    ref={fileRef}
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
