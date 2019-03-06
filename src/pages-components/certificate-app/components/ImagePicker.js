import React, { Component } from 'react'
import { isEmpty, uniqueId } from 'lodash'
import style from './ImagePicker.module.css'

const Image = ({ url, alt = 'Futuresaver Certificate' }) => {
  return <img className={`image ${style.Image}`} src={url} alt={alt} />
}

/**
 * @name ImagePicker
 * @param {string[]} images - image urls
 *
 */

class ImagePicker extends Component {
  renderImages = () => {
    if (isEmpty(this.props.images)) return null
    return this.props.images.map(this.renderImage)
  }

  renderImage(imageUrl) {
    return <Image url={imageUrl} key={uniqueId(imageUrl)} />
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
