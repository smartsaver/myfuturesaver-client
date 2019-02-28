import React from 'react'
import { Section } from './components'
import CertificateFormContainer from './state/CertificateFormContainer'

import AppContainer from './state/AppContainer'

const CertificateApp = () => {
  return (
    <Section>
      <h2 className="title">MyFutureSaver Certificate</h2>
      <div className="columns">
        <div className="column is-5">
          <CertificateFormContainer />
        </div>
        <div className="column is-7">Preview Here</div>
      </div>
    </Section>
  )
}

export default AppContainer(CertificateApp)
