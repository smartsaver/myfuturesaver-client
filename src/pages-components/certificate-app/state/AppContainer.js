import React, { Component } from 'react'
import CertificateContext, {
  defaultCertificateState,
} from './CertificateContext'

const AppContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateState(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    state = {
      ...defaultCertificateState,
      certificateActions: {
        updateRecepient: value => this.updateRecepient(value),
      },
    }

    updateRecepient = recepient => {
      this.setState(currentState => {
        return {
          currentState,
          certificateValues: {
            recepient,
          },
        }
      })
    }

    updateSender = sender => {
      this.updateCertificateValue({ sender })
    }

    updateCertificateMessage = message => {
      this.updateCertificateValue({ message })
    }

    render() {
      return (
        <CertificateContext.Provider value={this.state}>
          <WrappedComponent />
        </CertificateContext.Provider>
      )
    }
  }
}

export default AppContainer
