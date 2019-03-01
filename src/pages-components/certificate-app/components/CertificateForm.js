import React, { Component } from 'react'
import InputField from './Form/InputField'
import InputTextArea from './Form/InputTextArea'
import debounce from 'lodash/debounce'

class CertificateForm extends Component {
  state = {
    message: '',
    recepient: '',
    sender: '',
  }

  handleRecepientChange = event => {
    const recepient = event.target.value
    this.setState(() => ({ recepient }))
  }

  handleSenderChange = event => {
    const sender = event.target.value
    this.setState(() => ({ sender }))
  }

  handleMessageChange = event => {
    const message = event.target.value
    this.setState(() => ({ message }))
  }

  handleFormSubmit = event => {
    event.preventDefault()
  }

  handleFormChange = () => {
    this.debouncedCallOnSubmit()
  }

  debouncedCallOnSubmit = debounce(() => {
    this.props.onSubmit(this.state)
  }, 500)

  render() {
    const { recepient, sender, message } = this.state
    const {
      handleRecepientChange,
      handleSenderChange,
      handleMessageChange,
      handleFormSubmit,
      handleFormChange,
    } = this
    return (
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        <InputField
          name="certficate-recepient"
          labelText="To"
          value={recepient}
          onChange={handleRecepientChange}
        />
        <InputField
          name="certificate-sender"
          labelText="From"
          value={sender}
          onChange={handleSenderChange}
        />
        <InputTextArea
          name="certificate-message"
          labelText="Message"
          value={message}
          onChange={handleMessageChange}
        />
      </form>
    )
  }
}

export default CertificateForm
