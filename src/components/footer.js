import React from 'react'
import './footer.css'
import logo from '../images/logo-small.png'

const Footer = () => {
  return (
    <footer className="footer Footer--blue">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <img src={logo} alt="SmartSAVER" />
            <p>Copyright SmartSAVER.org © 2018. All Rights Reserved.</p>
          </div>
          <div className="column is-half">
            <h3 className="title is-3">Contact Us</h3>
            <a href="mailto:">info@smartsaver.org</a>
            <p>1-855-RESP-CLB (1-855-737-7252)</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
