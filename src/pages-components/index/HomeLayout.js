import React from 'react'
import Navbar from './SmartsaverNavbar'
// include bulma library
import 'bulma/css/bulma.css'
import './HomeLayout.css'
import Footer from './SmartsaverFooter'
import FontAwesomeScript from '../../components/scripts/FontAwesome'

const HomeLayout = ({ children }) => {
  return (
    <div className="HomeLayout">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FontAwesomeScript />
    </div>
  )
}

export default HomeLayout
