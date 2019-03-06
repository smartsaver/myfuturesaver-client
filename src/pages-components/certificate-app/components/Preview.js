import React from 'react'
import jsPdf from 'jspdf'
import style from './Preview.module.css'

const Preview = ({ sender = '', recepient = '', message = '' }) => {
  function previewPdf() {
    const doc = new jsPdf({
      orientation: 'landscape',
      format: 'letter',
    })
    doc.setFontSize(30)
    doc.text(recepient, 100, 100)
    doc.text(message, 100, 140)
    doc.text(sender, 100, 180)
    return doc.output('datauristring')
  }
  return (
    <embed
      className={style.PreviewFrame}
      src={previewPdf()}
      type="application/pdf"
    />
  )
}

export default Preview
