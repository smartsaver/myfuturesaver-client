import React from 'react'

/**
 * @function YoutubeVideoFrame
 * @param {Object} url - Youtube Embed URL, must have /embed
 * @param {Object} className - css class
 */

const YoutubeVideoFrame = ({ url, className = '' }) => {
  if (!url) return null
  return (
    <iframe
      className={`
        YoutubeVideoFrame
        ${className}
      `}
      title="Youtube Video"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    />
  )
}

export default YoutubeVideoFrame
