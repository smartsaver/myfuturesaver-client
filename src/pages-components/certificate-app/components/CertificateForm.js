import React, { Component } from 'react'
import InputField from './Form/InputField'
import InputTextArea from './Form/InputTextArea'
import ImagePicker from './ImagePicker'

/**
 * @name CertificateForm
 * @param {function} onSubmit - submit the form with the values.
 * @param {string[]} images - images array for the imagepicker
 */

class CertificateForm extends Component {
  state = {
    message: '',
    recepient: '',
    sender: '',
    selectedImage: null,
  }

  handleRecepientChange = event => {
    this.setState({ recepient: event.target.value })
  }

  handleSenderChange = event => {
    this.setState({ sender: event.target.value })
  }

  handleMessageChange = event => {
    this.setState({ message: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleSelectedImageChange = image => {
    this.setState({ selectedImage: image })
  }

  render() {
    const { recepient, sender, message } = this.state
    const {
      handleRecepientChange,
      handleSenderChange,
      handleMessageChange,
      handleFormSubmit,
      handleSelectedImageChange,
    } = this
    const { images } = this.props
    return (
      <form onSubmit={handleFormSubmit}>
        <ImagePicker
          onImageClick={handleSelectedImageChange}
          labelText="Pick an image"
          images={images}
        />
        <InputField
          name="certficate-recepient"
          labelText="To"
          value={recepient}
          onChange={handleRecepientChange}
        />
        <InputField
          name="certificate-sender"
          labelText="From"
          value={sender}
          onChange={handleSenderChange}
        />
        <InputTextArea
          name="certificate-message"
          labelText="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="button" type="submit">
          See Preview
        </button>
      </form>
    )
  }
}

export default CertificateForm
