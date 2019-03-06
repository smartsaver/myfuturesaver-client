import React from 'react'
import { Section } from './components'
import CertificateForm from './components/CertificateForm'
// import Preview from './components/Preview'
// import AppContainer from './state/AppContainer'
import CertificateFormContainer from './state/CertificateFormContainer'

const CertForm = CertificateFormContainer(CertificateForm)

const CertificateApp = () => {
  return (
    <Section>
      <h2 className="title">MyFutureSaver Certificate</h2>
      <div className="columns">
        <div className="column">
          <CertForm />
        </div>
      </div>
    </Section>
  )
}

export default CertificateApp
