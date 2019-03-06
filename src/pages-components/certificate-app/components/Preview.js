import React from 'react'
import jsPdf from 'jspdf'
import style from './Preview.module.css'

function previewPdf({ sender, recepient, message }) {
  const doc = new jsPdf({
    orientation: 'landscape',
    format: 'letter',
  })

  doc.text(sender, 20, 20)
  doc.text(recepient, 20, 40)
  doc.text(message, 20, 50)
  return doc.output('datauristring')
}

const Preview = ({ sender = '', recepient = '', message = '' }) => {
  return (
    <embed
      className={style.PreviewFrame}
      src={previewPdf({ sender, recepient, message })}
      type="application/pdf"
    />
  )
}

export default Preview
