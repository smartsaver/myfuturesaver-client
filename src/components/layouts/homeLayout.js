import React, { Fragment } from 'react'
import Navbar from '../navbar'
// include bulma library
import 'bulma/css/bulma.css'
import './homeLayout.css'
import Footer from '../footer'

const homeLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default homeLayout
