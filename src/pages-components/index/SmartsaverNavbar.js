import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar'
import NavbarItem from '../../components/Navbar/NavbarItem'
import NavbarDropdown from '../../components/Navbar/NavbarDropdown'
import brandLogo from '../../images/logo-small.png'
import './SmartsaverNavbar.css'

/**
 * @function SmartsaverNavbar - custom themed blue navbar with smartsaver logo.
 * @param {Object} navbarEnd - any react element. will go to the right side of the navbar
 * @param {Object} [navbarBrand = defaultNavbarBrand] - any react element, will go the leftmost. Has a default value of smartsaver logo.
 */

const defaultNavbarBrand = (
  <NavbarItem text={<img src={brandLogo} alt="SmartSAVER" />} href="#" />
)

const defaultNavbarEnd = (
  <Fragment>
    <NavbarDropdown text="Application Process">
      <NavbarItem text="1. Questionnaire" href="/#questionnaire" />
      <NavbarItem
        text="2. RESP/CLB Application"
        href="/#resp-clb-application"
      />
      <NavbarItem text="3. A. Submission" href="/#submission-form" />
      <NavbarItem text="3. B. Submit CLB" href="/#upload-clb" />
    </NavbarDropdown>
    <NavbarItem text="FAQ" href="/#faq" />
    <NavbarItem text="Contact" href="/#contact" />
  </Fragment>
)

const SmartsaverNavbar = ({
  navbarBrand = defaultNavbarBrand,
  navbarEnd = defaultNavbarEnd,
}) => {
  return (
    <Navbar
      className="SmartsaverNavbar Navbar--Smartsaver-theme is-dark"
      navbarBrand={navbarBrand}
      navbarEnd={navbarEnd}
    />
  )
}

export default SmartsaverNavbar
