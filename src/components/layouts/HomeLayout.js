import React from 'react'
import Navbar from '../Navbar'
// include bulma library
import 'bulma/css/bulma.css'
import './HomeLayout.css'
import Footer from '../Footer'
import GoogleAnalyticsScript from '../scripts/GoogleAnalytics'
import FontAwesomeScript from '../scripts/FontAwesome'

const HomeLayout = ({ children }) => {
  return (
    <div className="HomeLayout">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <GoogleAnalyticsScript />
      <FontAwesomeScript />
    </div>
  )
}

export default HomeLayout
