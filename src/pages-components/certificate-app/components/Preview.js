import React from 'react'
import Content from '../../../components/Content'
import style from './Preview.module.css'

const Preview = ({ url, text }) => {
  if (url === '') return <Content html={text} />
  return (
    <embed className={style.PreviewFrame} src={url} type="application/pdf" />
  )
}

export default Preview
