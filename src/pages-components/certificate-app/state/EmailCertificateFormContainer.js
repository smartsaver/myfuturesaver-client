import React, { Component } from 'react'

/**
 *
 * @param {Object} WrappedComponent - react component
 * @param {function} onSubmit - emits email address
 */

const EmailCertificateFormContainer = WrappedComponent =>
  class extends Component {
    static displayName = `CertificateFormContainer(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    render() {
      return <WrappedComponent onSubmit={this.props.onSubmit} />
    }
  }

export default EmailCertificateFormContainer
