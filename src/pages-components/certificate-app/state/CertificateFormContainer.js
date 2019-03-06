import React, { Component } from 'react'
import jsPdf from 'jspdf'
import images from './images'

const CertificateFormContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateFormContainer(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    onSubmit = ({ recepient, sender, message }) => {
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
      const props = {
        onSubmit: this.onSubmit,
        images,
      }
      return <WrappedComponent {...props} />
    }
  }
}

export default CertificateFormContainer
