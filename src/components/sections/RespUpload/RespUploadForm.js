import React, { Component } from 'react'
import Form from '../../Form'
import FormField from '../../Form/FormFieldControl'
import PropTypes from 'prop-types'

// This form only keeps the form state and passes it to it's parent.

/* eslint-disable jsx-a11y/label-has-for */
class RespSubmissionForm extends Component {
  state = {
    name: '',
    email: '',
    kidsNames: '',
    respStatementType: '',
    files: '',
  }

  // derived state from the file name
  displayFileName = () => {
    const fileName = this.state.files
    if (fileName === '') return 'No file Selected.'
    return fileName[0].name
  }

  // form handlers

  handleFormSubmit = event => {
    // prevent from from html submitting
    event.preventDefault()
    // form data to parent's submit method
    this.props.onSubmit(this.state)
  }

  handleNameChange = event => {
    const { value } = event.target
    this.setState(() => ({ name: value }))
  }

  handleEmailChange = event => {
    const { value } = event.target
    this.setState(() => ({ email: value }))
  }

  handleKidsNamesChange = event => {
    const { value } = event.target
    this.setState(() => ({ kidsNames: value }))
  }

  handleRespStatementTypeChange = event => {
    const { value } = event.target
    this.setState(() => ({ respStatementType: value }))
  }

  handleFileChange = event => {
    if (!event.target.files) return ''
    const files = event.target.files
    this.setState(() => ({ files }))
  }

  render() {
    const { name, email, kidsNames, respStatementType } = this.state
    const {
      handleNameChange,
      handleEmailChange,
      displayFileName,
      handleFileChange,
      handleRespStatementTypeChange,
      handleKidsNamesChange,
    } = this
    return (
      <Form name="resp-form" method="POST" onSubmit={this.handleFormSubmit}>
        <FormField>
          <label htmlFor="resp-form-name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="resp-form-name"
            name="resp-form-name"
            className="input"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="resp-form-email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="resp-form-email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="resp-form-children-names" className="label">
            {"Child's First Name and Last Name"}
          </label>
          <textarea
            name="resp-form-children-names"
            id="resp-form-children-names"
            className="textarea"
            placeholder="Enter your children's first name and last names"
            value={kidsNames}
            onChange={handleKidsNamesChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="resp-form-statement-type" className="label">
            I am submitting my:
          </label>
          <div className="select">
            <select
              name="resp-form-statement-type"
              id="resp-form-statement-type"
              value={respStatementType}
              onBlur={handleRespStatementTypeChange}
              onChange={handleRespStatementTypeChange}
            >
              <option value="RESP Statement from my bank">
                RESP Statement from my bank
              </option>
              <option value="CESP Statement of Account from the government">
                CESP Statement of Account from the government
              </option>
            </select>
          </div>
        </FormField>
        <FormField>
          <div className="file has-name">
            <label className="file-label">
              <input
                id="resp-form-file"
                name="resp-form-file"
                className="file-input"
                type="file"
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
        </FormField>
        <FormField>
          <button className="button" type="submit">
            Submit
          </button>
        </FormField>
      </Form>
    )
  }
}

RespSubmissionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default RespSubmissionForm
