import React from 'react'
import * as jsPdf from 'jspdf'
import style from './Preview.module.css'

const Preview = ({ sender = '', recepient = '', message = '' }) => {
  const doc = new jsPdf({
    orientation: 'landscape',
    format: 'letter',
  })

  doc.text(sender, 20, 20)
  doc.text(recepient, 20, 40)
  doc.text(message, 20, 50)

  return (
    <embed
      className={style.PreviewFrame}
      src={doc.output('datauristring')}
      type="application/pdf"
    />
  )
}

export default Preview
