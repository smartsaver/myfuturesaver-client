import React, { Fragment } from 'react'
import Navbar from '../Navbar'
// include bulma library
import 'bulma/css/bulma.css'
import './HomeLayout.css'
import Footer from '../Footer'

const HomeLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default HomeLayout
