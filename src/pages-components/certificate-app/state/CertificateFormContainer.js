import React, { Component } from 'react'
import jsPdf from 'jspdf'
import images from './images'

const CertificateFormContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateFormContainer(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    handleSubmit = ({ recepient, sender, message }) => {
      const makeLandscapePdf = () => {
        const doc = new jsPdf({
          orientation: 'landscape',
          format: 'letter',
        })
        doc.setFontSize(30)
        doc.text(recepient, 100, 80)
        doc.output('dataurlnewwindow')
      }

      makeLandscapePdf()
    }

    render() {
      return <WrappedComponent onSubmit={this.handleSubmit} images={images} />
    }
  }
}

export default CertificateFormContainer
