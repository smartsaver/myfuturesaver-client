import React, { Component } from 'react'
import CertificateForm from '../components/CertificateForm'
import CertificateConsumer from './CertificateConsumer'

class CertificateFormContainer extends Component {
  render() {
    const { recepient, sender, message } = this.props.certificateValues
    return (
      <CertificateForm
        recepient={recepient}
        sender={sender}
        message={message}
      />
    )
  }
}

export default CertificateConsumer(CertificateFormContainer)
