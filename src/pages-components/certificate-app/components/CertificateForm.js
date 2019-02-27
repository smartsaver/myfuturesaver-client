import React from 'react'
import InputField from './Form/InputField'

const CertificateForm = ({ sender, recepient }) => {
  return (
    <form>
      <InputField
        name="certficate-recepient"
        labelText="To"
        value={recepient}
      />
      <InputField name="certificate-sender" labelText="From" value={sender} />
    </form>
  )
}

export default CertificateForm
