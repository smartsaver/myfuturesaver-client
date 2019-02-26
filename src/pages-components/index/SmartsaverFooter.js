import React from 'react'
import Footer from '../../components/Footer'
import './SmartsaverFooter.css'
import footerContent from './content/footerContent'

const defaultChildren = () => {
  const { image, intro, otherLinks, footer, contact } = footerContent
  return (
    <div className="columns">
      <div className="column is-half">
        <img src={image} alt="SmartSAVER" />
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
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
  )
}

/**
 * @function SmartsaverFooter - footer, Smartsaver themed.
 * @param {string} [name= 'contact'] - footer section id name
 * @param {Object} [children = defaultChildren()] - default react element for footer content
 */

const SmartsaverFooter = ({
  name = 'contact',
  children = defaultChildren(),
}) => {
  return (
    <Footer name={name} className="Footer--Smartsaver-theme">
      {children}
    </Footer>
  )
}

export default SmartsaverFooter
