import React, { Component } from 'react'

/**
 * @name ImagePicker
 * @param {string[]} images - image urls
 */

class ImagePicker extends Component {
  state = {
    selectedUrl: '',
  }

  render() {
    return (
      <div>
        <h2 className="title">ImagePicker</h2>
        <img src="" alt="" />
      </div>
    )
  }
}

export default ImagePicker
