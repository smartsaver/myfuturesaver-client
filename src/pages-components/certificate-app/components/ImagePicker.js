import React, { Component } from 'react'
import { isEmpty, uniqueId } from 'lodash'

const Image = ({ url, alt = 'Futuresaver Certificate' }) => {
  return <img className={`image`} src={url} alt={alt} />
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
        <p className="label">Pick a certificate</p>
        {this.renderImages()}
      </div>
    )
  }
}

export default ImagePicker
