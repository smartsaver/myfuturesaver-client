import { createContext } from 'react'

const defaultCertificateState = {
  certificateValues: {
    recepient: 'hello',
    sender: 'hello',
    message: 'hello',
  },
}

const CertificateContext = createContext(defaultCertificateState)

export { defaultCertificateState }
export default CertificateContext
