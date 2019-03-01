import React from 'react'
import { Section } from './components'
import CertificateForm from './components/CertificateForm'

import AppContainer from './state/AppContainer'

const CertificateApp = ({ /*certificateValues,*/ updateCertificateValues }) => {
  return (
    <Section>
      <h2 className="title">MyFutureSaver Certificate</h2>
      <div className="columns">
        <div className="column is-5">
          <CertificateForm onSubmit={updateCertificateValues} />
        </div>
        <div className="column is-7" />
      </div>
    </Section>
  )
}

export default AppContainer(CertificateApp)
