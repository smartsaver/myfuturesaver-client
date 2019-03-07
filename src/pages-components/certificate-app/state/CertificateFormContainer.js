import React, { Component } from 'react'
import jsPdf from 'jspdf'
import images from './images'

const CertificateFormContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateFormContainer(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    handleSubmit = ({ recepient, sender, message, selectedImage }) => {
      this.makeLandscapePdf({ recepient, sender, message, selectedImage })
    }

    makeLandscapePdf = ({ recepient, sender, message, selectedImage }) => {
      const doc = new jsPdf({
        orientation: 'landscape',
        format: 'letter',
      })
      doc.setProperties({
        title: 'Myfuturesaver Certificate',
        author: 'Smartsaver.org',
      })
      doc.setFontSize(30)
      doc.addImage(this.base64Image(selectedImage), 'JPEG', 0, 0, 0, 215)
      doc.text(recepient, 100, 115)
      doc.output('dataurlnewwindow', 'Myfuturesaver Certificate.pdf')
    }

    base64Image(image) {
      let base64Uri
      const canvas = document.createElement('canvas')
      document.body.appendChild(canvas)
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0)
      base64Uri = canvas.toDataURL('image/jpeg')
      document.body.removeChild(canvas)
      return base64Uri
    }

    render() {
      return <WrappedComponent onSubmit={this.handleSubmit} images={images} />
    }
  }
}

export default CertificateFormContainer
