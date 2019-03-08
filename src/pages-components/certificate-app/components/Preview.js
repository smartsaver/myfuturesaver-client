import React from 'react'
import style from './Preview.module.css'

const Preview = ({ url }) => {
  return (
    <embed className={style.PreviewFrame} src={url} type="application/pdf" />
  )
}

export default Preview
