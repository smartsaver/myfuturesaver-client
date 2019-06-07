import React, { Component } from 'react'
import InputField from './Form/InputField'

/**
 * Email Certificate Form
 * @param {function} onSubmit - form submit event
 */

class EmailCertificateForm extends Component {
  state = {
    email: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.email)
  }

  handleEmail = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    const { handleEmail, handleSubmit } = this
    const { email } = this.state
    return (
      <form onSubmit={handleSubmit}>
        <InputField
          name="certificate-email"
          labelText="Email Address"
          onChange={handleEmail}
          value={email}
          type="email"
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
    )
  }
}

export default EmailCertificateForm
