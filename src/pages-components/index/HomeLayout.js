import React from 'react'
import marked from '../../libs/marked'
import 'bulma/css/bulma.css'
import Navbar from './SmartsaverNavbar'
import Footer from './SmartsaverFooter'
import DangerNotification from '../../components/Notification/DangerWithDisimiss'
import Content from '../../components/Content'
import FontAwesomeScript from '../../components/scripts/FontAwesome'
import './HomeLayout.css'

const _DangerNotification = () => (
  <DangerNotification
    message={
      <Content
        html={marked(`
Thank you for your interest in MyFutureSAVER. This program is now closed. For more information on how to open a no-cost RESP and apply for the Canada Learning Bond, please visit [MySmartFUTURE.org](https://mysmartfuture.org). Questions? Please email info@smartsaver.org.

Merci de votre intérêt pour MyFutureSAVER. L'inscription à ce programme est maintenant terminée. Pour savoir comment ouvrir un REEE sans frais et demander le Bon d'études canadien, visitez le site: https://moneducavenir.org Des questions? Écrivez nous! info@smartsaver.org  
      `)}
      />
    }
  />
)

const HomeLayout = ({ children }) => {
  return (
    <div className="HomeLayout">
      <_DangerNotification />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FontAwesomeScript />
    </div>
  )
}

export default HomeLayout
