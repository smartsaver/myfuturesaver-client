import React, { Component } from 'react'

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

    render() {
      return (
        <WrappedComponent
          {...this.state}
          updateCertificateValues={this.updateCertificateValues}
        />
      )
    }
  }
}

export default AppContainer
