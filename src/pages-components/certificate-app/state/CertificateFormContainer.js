import React, { Component } from 'react'
import CertificateForm from '../components/CertificateForm'
import CertificateConsumer from './CertificateConsumer'

class CertificateFormContainer extends Component {
  handleRecepientChange = event => {
    this.props.certificateActions.updateRecepient(event.target.value)
  }

  handleSenderChange = event => {
    this.props.certificateActions.updateSender(event.target.value)
  }

  handleMessageChange = event => {
    this.props.certificateActions.updateMessage(event.target.value)
  }

  render() {
    const { recepient, sender, message } = this.props.certificateValues
    const {
      handleRecepientChange,
      handleMessageChange,
      handleSenderChange,
    } = this
    return (
      <CertificateForm
        recepient={recepient}
        sender={sender}
        message={message}
        onRecepientChange={handleRecepientChange}
        onMessageChange={handleMessageChange}
        onSenderChange={handleSenderChange}
      />
    )
  }
}

export default CertificateConsumer(CertificateFormContainer)
