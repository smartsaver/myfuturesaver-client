import React, { Component } from 'react'
import CertificateContext from './CertificateContext'

const CertificateConsumer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateState(${WrappedComponent.displayName ||
      WrappedComponent.name})`
    render() {
      return (
        <CertificateContext.Consumer>
          {certificateState => {
            return <WrappedComponent {...certificateState} />
          }}
        </CertificateContext.Consumer>
      )
    }
  }
}

export default CertificateConsumer
