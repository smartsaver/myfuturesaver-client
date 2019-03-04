import React from 'react'
import { Section } from './components'
import CertificateForm from './components/CertificateForm'
import Preview from './components/Preview'
import AppContainer from './state/AppContainer'

const CertificateApp = ({ certificateValues, updateCertificateValues }) => {
  return (
    <Section>
      <h2 className="title">MyFutureSaver Certificate</h2>
      <div className="columns">
        <div className="column is-5">
          <CertificateForm onSubmit={updateCertificateValues} />
        </div>
        <div className="column is-7">
          <Preview {...certificateValues} />
        </div>
      </div>
    </Section>
  )
}

export default AppContainer(CertificateApp)
