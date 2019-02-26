import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const { text, children } = this.props
    const isDropDownActive = this.state.isActive ? 'is-active' : ''
    const isDropdownHidden = !this.state.isActive ? 'is-hidden' : ''
    return (
      <div className={`navbar-item has-dropdown ${isDropDownActive}`}>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a className="navbar-link" href="#" onClick={this.handleDropdownClick}>
          {text}
        </a>

        <div
          className={`navbar-dropdown js-navbar-dropdown ${isDropdownHidden}`}
        >
          {children}
        </div>
      </div>
    )
  }
}

NavbarDropdown.propTypes = {
  text: PropTypes.string.isRequired,
}

export default NavbarDropdown
