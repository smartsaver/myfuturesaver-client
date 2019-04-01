import React, { Component } from 'react'
import certificate from '../libs/certificate'

/**
 *
 * @param {Object} WrappedComponent - react component
 * @returns - component with state
 */

const AppContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateState(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    state = {
      certificate: {
        message: '',
        recepient: '',
        sender: '',
        selectedImage: null,
        previewUrl: '',
      },
    }

    updateCertificateValues = certificateValues => {
      this.setState(currentState => ({
        ...currentState,
        certificate: {
          ...currentState.certificate,
          ...certificateValues,
        },
      }))
    }

    emailCertificateTo = email => {
      console.log('email certificate to', {
        email,
        certificateBase64Url: certificate
          .makeCertificate(this.state.certificate)
          .output('datauristring', 'MyFutureSaver Certificate.pdf'),
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          updateCertificateValues={this.updateCertificateValues}
          emailCertificateTo={this.emailCertificateTo}
        />
      )
    }
  }
}

export default AppContainer
