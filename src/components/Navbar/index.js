import React, { Component } from 'react'
import Burger from './Burger'
import NavbarDropdown from './NavbarDropdown'
import NavbarItem from './NavbarItem'
import logo from '../../images/logo-small.png'
import './Navbar.css'

const Navbar = ({ isActive, onBurgerClick }) => {
  const isMenuActive = isActive ? 'is-active' : ''
  return (
    <nav className="navbar is-dark Navbar--blue">
      <div className="container">
        <div className="navbar-brand">
          <a href="/#" className="navbar-item">
            <img src={logo} alt="SmartSAVER" className="image" />
          </a>
          <Burger isActive={isActive} onBurgerClick={onBurgerClick} />
        </div>
        <div className={`navbar-menu ${isMenuActive} js-navbar-menu`}>
          <div className="navbar-end">
            <NavbarDropdown text="Application Process" />
            <NavbarItem text="FAQ" href="/#faq" />
            <NavbarItem text="Contact" href="/#contact" />
          </div>
        </div>
      </div>
    </nav>
  )
}

class NavbarContainer extends Component {
  state = {
    isActive: false,
  }

  componentDidMount = () => {
    this.closeMenu()
  }

  closeMenu = () => {
    /* eslint-disable no-undef */
    // close the menu when something's clicked
    const navbarMenu = document.querySelector('.js-navbar-menu')
    navbarMenu.addEventListener('click', event => {
      if (event.target.classList.contains('navbar-item') === true)
        this.setState(() => ({ isActive: false }))
    })
  }

  handleOnBurgerClick = event => {
    // disable the default event
    event.preventDefault()
    this.toggleIsActive()
  }

  toggleIsActive = () => {
    // update the state
    this.setState(currentState => {
      return {
        isActive: !currentState.isActive,
      }
    })
  }

  render() {
    return (
      <header>
        <Navbar
          isActive={this.state.isActive}
          onBurgerClick={this.handleOnBurgerClick}
        />
      </header>
    )
  }
}

export default NavbarContainer
