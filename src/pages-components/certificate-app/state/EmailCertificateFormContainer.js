import React, { Component } from 'react'

/**
 *
 * @param {Object} WrappedComponent - react component
 */

const EmailCertificateFormContainer = WrappedComponent =>
  class extends Component {
    static displayName = `CertificateFormContainer(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    handleSubmit = email => {
      console.log(email)
    }

    render() {
      return <WrappedComponent onSubmit={this.handleSubmit} />
    }
  }

export default EmailCertificateFormContainer
