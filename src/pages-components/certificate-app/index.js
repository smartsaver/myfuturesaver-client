import React from 'react'
import { Section } from './components'
import CertificateForm from './components/CertificateForm'
import Preview from './components/Preview'
import AppContainer from './state/AppContainer'
import CertificateFormContainer from './state/CertificateFormContainer'

const CertForm = CertificateFormContainer(CertificateForm)

const CertificateApp = ({ certificate, updateCertificateValues }) => {
  const handleUpdatePreview = previewUrl => {
    updateCertificateValues({ previewUrl })
  }

  return (
    <Section>
      <h2 className="title">MyFutureSaver Certificate</h2>
      <div className="columns">
        <div className="column">
          <CertForm onUpdatePreview={handleUpdatePreview} />
        </div>
        <div className="column">
          <Preview url={certificate.previewUrl} />
        </div>
      </div>
    </Section>
  )
}

export default AppContainer(CertificateApp)
