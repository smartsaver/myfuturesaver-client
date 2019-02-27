import React, { Component } from 'react'
import CertificateForm from '../components/CertificateForm'
import CertificateContext from './CertificateContext'

class CertificateFormContainer extends Component {
  render() {
    return (
      <CertificateContext.Consumer>
        {({ certificateValues }) => {
          const { recepient, sender, message } = certificateValues
          return (
            <CertificateForm
              recepient={recepient}
              sender={sender}
              message={message}
            />
          )
        }}
      </CertificateContext.Consumer>
    )
  }
}

export default CertificateFormContainer
