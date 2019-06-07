import React, { Component } from 'react'
import jsPdf from '../libs/certificate'
import images from './images'

/**
 * @name CertificateFormContainer
 * @param {function} onUpdatePreview - spits out preview url
 * @param {function} onValuesChange - Do anything when the form changes form values
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

    makeCertificate = certificateValues => {
      return jsPdf.makeCertificate(certificateValues).setProperties({
        title: 'Myfuturesaver Certificate',
        author: 'Smartsaver.org',
      })
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

    render() {
      return (
        <WrappedComponent
          onDownload={this.handleDownload}
          onSubmit={this.handleSubmit}
          onValuesChange={this.props.onValuesChange}
          images={images}
        />
      )
    }
  }
}

export default CertificateFormContainer
