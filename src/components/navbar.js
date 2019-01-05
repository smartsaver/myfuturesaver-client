import React, { Component } from 'react'
import logo from '../images/logo-small.png'
import './navbar.css'

const Burger = ({ isActive, onBurgerClick }) => {
  const isBurgerActive = isActive ? 'is-active' : ''
  return (
    <a
      role="button"
      className={`navbar-burger burger ${isBurgerActive}`}
      aria-label="menu"
      aria-expanded={isActive}
      data-target="navbarBasicExample"
      href="/#"
      onClick={onBurgerClick}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  )
}

const NavbarItem = ({ text, href }) => {
  return (
    <a href={href} className="navbar-item">
      {text}
    </a>
  )
}

class NavbarDropdown extends Component {
  state = {
    isActive: false,
  }

  componentDidMount = () => {
    this.closeMenu()
  }

  closeMenu = () => {
    /* eslint-disable no-undef */
    // close the menu when something's clicked
    const menu = document.querySelector('.js-navbar-dropdown')
    menu.addEventListener('click', event => {
      if (event.target.classList.contains('navbar-item') === true)
        this.setState(() => ({ isActive: false }))
    })
  }

  handleDropdownClick = () => {
    this.toggleIsActive()
  }

  toggleIsActive = () => {
    this.setState(currentState => {
      return {
        isActive: !currentState.isActive,
      }
    })
  }

  render() {
    /* eslint-disable jsx-a11y/anchor-is-valid */
    const isDropDownActive = this.state.isActive ? 'is-active' : ''
    const isDropdownHidden = !this.state.isActive ? 'is-hidden' : ''
    return (
      <div className={`navbar-item has-dropdown ${isDropDownActive}`}>
        <a className="navbar-link" href="#" onClick={this.handleDropdownClick}>
          Apply Online
        </a>

        <div
          className={`navbar-dropdown js-navbar-dropdown ${isDropdownHidden}`}
        >
          <NavbarItem text="Terms of agreement" href="#" />
          <NavbarItem text="Email" href="#" />
          <NavbarItem text="Questionnaire" href="#" />
          <NavbarItem text="RESP/CLB Application" href="#" />
          <NavbarItem text="BMO Participants" href="#" />
          <NavbarItem text="WealthSimple Participants" href="#" />
          <NavbarItem text="Not a BMO or WealthSimple Family?" href="#" />
        </div>
      </div>
    )
  }
}

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
            <NavbarItem text="Claim" href="/#claim" />
            <NavbarItem text="Steps to Apply" href="/#steps-to-apply" />
            <NavbarDropdown />
            <NavbarItem text="FAQ" href="/#faq" />
            <NavbarItem text="Claim" href="/#contact" />
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
