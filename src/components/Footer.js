import React from 'react'
import logo from '../images/logo-small.png'
import footerContent from '../content/footerContent'
import './Footer.css'

const Footer = () => {
  const { intro, contact, otherLinks, footer } = footerContent
  return (
    <footer id="contact" className="footer Footer Footer--blue">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <img src={logo} alt="SmartSAVER" />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: intro }}
            />
            <div
              className="title is-6 is-marginless"
              dangerouslySetInnerHTML={{ __html: otherLinks }}
            />
            <div
              className="content is-marginless"
              dangerouslySetInnerHTML={{ __html: footer }}
            />
          </div>
          <div className="column is-half">
            <div>
              <h3 className="title is-3">Contact Us</h3>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: contact }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
