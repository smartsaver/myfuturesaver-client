import React from 'react'
import { Section } from './components'
import CertificateForm from './components/CertificateForm'
import Preview from './components/Preview'
import AppContainer from './state/AppContainer'
import CertificateFormContainer from './state/CertificateFormContainer'
// import EmailSection from './EmailSection'
import content from './content'

const CertForm = CertificateFormContainer(CertificateForm)

const CertificateApp = ({
  certificate,
  updateCertificateValues,
  // emailCertificateTo,
  sectionName = '',
}) => {
  const handleUpdatePreview = previewUrl => {
    updateCertificateValues({ previewUrl })
  }

  const handleValuesChange = state => {
    updateCertificateValues(state)
  }

  return (
    <Section name={sectionName}>
      <h2 className="title">MyFutureSaver Certificate</h2>
      <div className="columns is-multiline">
        <div className="column">
          <CertForm
            onValuesChange={handleValuesChange}
            onUpdatePreview={handleUpdatePreview}
          />
        </div>
        <div className="column">
          <Preview
            text={content.certificateInstructions}
            url={certificate.previewUrl}
          />
        </div>
        {/* <div className="column is-12">
          <EmailSection onFormSubmit={emailCertificateTo} />
        </div> */}
      </div>
    </Section>
  )
}

export default AppContainer(CertificateApp)
