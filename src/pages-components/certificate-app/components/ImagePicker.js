import React, { Component } from 'react'
import { isEmpty, uniqueId } from 'lodash'
import style from './ImagePicker.module.css'

const Image = ({
  url,
  alt = 'Futuresaver Certificate',
  onClick,
  selected = false,
}) => {
  const handleOnClick = () => {
    onClick({ url })
  }

  const isImageSelected = selected ? style.Selected : ''

  return (
    <button
      className={`${style.Image} ${isImageSelected}`}
      type="button"
      onClick={handleOnClick}
    >
      <img className="image" src={url} alt={alt} />
    </button>
  )
}

/**
 * @name ImagePicker
 * @param {string[]} images - image urls
 *
 */

class ImagePicker extends Component {
  state = {
    selectedUrl: '',
  }

  static getDerivedStateFromProps(props, state) {
    // dont derive if no props
    if (isEmpty(props.images)) return null
    // dont derive if there's an intial value
    if (state.selectedUrl !== '') return null
    // set the first element as an initial state
    return { ...state, selectedUrl: props.images[0] }
  }

  handleImageClick = ({ url }) => {
    this.setState({ selectedUrl: url })
  }

  renderImages = () => {
    if (isEmpty(this.props.images)) return null
    return this.props.images.map(this.renderImage)
  }

  renderImage = imageUrl => {
    const isTestEnvironment =
      process.env.NODE_ENV === 'test' ? uniqueId() : imageUrl
    return (
      <Image
        url={imageUrl}
        key={isTestEnvironment}
        onClick={this.handleImageClick}
        selected={!!(this.state.selectedUrl === imageUrl)}
      />
    )
  }

  render() {
    return (
      <div>
        <p className="label">{this.props.labelText}</p>
        <div className={style.ImagesContainer}>{this.renderImages()}</div>
      </div>
    )
  }
}

export default ImagePicker
