import React from 'react'
import Navbar from '../Navbar'
// include bulma library
import 'bulma/css/bulma.css'
import './HomeLayout.css'
import Footer from '../Footer'

const HomeLayout = ({ children }) => {
  return (
    <div className="HomeLayout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
