import React, { Component } from 'react'
import debounce from 'lodash/debounce'

const AppContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateState(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    state = {
      certificateValues: {
        message: '',
        sender: '',
        recepient: '',
      },
    }

    updateCertificateValues = certificateValues => {
      this.setState(currentState => ({
        ...currentState,
        certificateValues: {
          ...currentState.certificateValues,
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
