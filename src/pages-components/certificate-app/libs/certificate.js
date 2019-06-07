import JsPdf from 'jspdf'

/**
 * @function makeCertificate
 * @param {object} certificateValues - { recepient, sender, message, selectedImage }
 * @returns - instance of jspdf
 */

function makeCertificate({ recepient, sender, message, selectedImage }) {
  const doc = new JsPdf({
    orientation: 'landscape',
    format: 'letter',
    lineHeight: 1.4,
  })
  doc.setTextColor(50, 140, 198)
  doc.setFontSize(25)
  doc.addImage(
    base64Image(selectedImage),
    'JPEG',
    0,
    0,
    doc.internal.pageSize.getWidth(),
    doc.internal.pageSize.getHeight()
  )
  doc.text(recepient, 138, 113, 'center')
  doc.text(message, 138, 125, 'center')
  doc.text(sender, 138, 176.5, 'center')
  return doc
}

/**
 * @function base64Image - make base64 uri for adding images in jspdf
 * @param {HTMLImageElement} image
 * @returns {string} - base64 uri of the image
 */

function base64Image(image) {
  /* eslint-disable no-undef */
  let base64Uri
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  canvas.width = image.naturalWidth
  canvas.height = image.naturalHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0)
  base64Uri = canvas.toDataURL('image/jpeg')
  document.body.removeChild(canvas)
  return base64Uri
}

export default {
  makeCertificate,
  base64Image,
}
