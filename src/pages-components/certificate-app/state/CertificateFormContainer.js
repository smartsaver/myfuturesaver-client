import React, { Component } from 'react'
import jsPdf from 'jspdf'
import images from './images'

/**
 * @name CertificateFormContainer
 * @param {function} onUpdatePreview - spits out preview url
 * @param {Object} WrappedComponent - react element
 */

const CertificateFormContainer = WrappedComponent => {
  return class extends Component {
    static displayName = `CertificateFormContainer(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    handleSubmit = certificateValues => {
      this.props.onUpdatePreview(this.makePreviewUrl(certificateValues))
    }

    handleDownload = certificateValues => {
      this.downloadCertificate(certificateValues)
    }

    makePreviewUrl = certificateValues => {
      return this.makeCertificate(certificateValues).output(
        'datauristring',
        'Myfuturesaver Certificate.pdf'
      )
    }

    downloadCertificate = certificateValues => {
      this.makeCertificate(certificateValues).save(
        'Myfuturesaver Certificate.pdf'
      )
    }

    makeCertificate({ recepient, sender, message, selectedImage }) {
      const doc = new jsPdf({
        orientation: 'landscape',
        format: 'letter',
        lineHeight: 1.4,
      })
      doc.setProperties({
        title: 'Myfuturesaver Certificate',
        author: 'Smartsaver.org',
      })
      doc.setTextColor(50, 140, 198)
      doc.setFontSize(25)
      doc.addImage(
        this.base64Image(selectedImage),
        'JPEG',
        0,
        0,
        doc.internal.pageSize.getWidth(),
        doc.internal.pageSize.getHeight()
      )
      doc.text(recepient, 138, 113, 'center')
      doc.text(message, 138, 125, 'center')
      doc.text(sender, 138, 176.5, 'center')
      return doc
    }

    base64Image(image) {
      /* eslint-disable no-undef */
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
      return (
        <WrappedComponent
          onDownload={this.handleDownload}
          onSubmit={this.handleSubmit}
          images={images}
        />
      )
    }
  }
}

export default CertificateFormContainer
