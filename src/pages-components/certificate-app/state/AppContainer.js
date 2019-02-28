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
        updateSender: value => this.updateSender(value),
        updateMessage: value => this.updateCertificateMessage(value),
      },
    }

    updateRecepient = recepient => {
      this.setState(() => {
        return {
          certificateValues: {
            recepient,
          },
        }
      })
    }

    updateSender = sender => {
      this.setState(() => {
        return {
          certificateValues: {
            sender,
          },
        }
      })
    }

    updateCertificateMessage = message => {
      this.setState(() => {
        return {
          certificateValues: {
            message,
          },
        }
      })
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
