import React from 'react'
import InputField from './Form/InputField'
import InputTextArea from './Form/InputTextArea'

const CertificateForm = ({
  sender,
  recepient,
  message,
  onRecepientChange,
  onSenderChange,
  onMessageChange,
}) => {
  return (
    <form>
      <InputField
        name="certficate-recepient"
        labelText="To"
        value={recepient}
        onChange={onRecepientChange}
      />
      <InputField
        name="certificate-sender"
        labelText="From"
        value={sender}
        onChange={onSenderChange}
      />
      <InputTextArea
        name="certificate-message"
        labelText="Message"
        value={message}
        onChange={onMessageChange}
      />
    </form>
  )
}

export default CertificateForm
