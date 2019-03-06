import React, { Component } from 'react'

const CertificateFormContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateFormContainer(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    onSubmit = () => {
      console.log('submit form HOC Certificate form container')
    }

    render() {
      const props = {
        onSubmit: this.onSubmit,
      }
      return <WrappedComponent {...props} />
    }
  }
}

export default CertificateFormContainer
