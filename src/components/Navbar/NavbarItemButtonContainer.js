import React from 'react'

const NavbarItemButtonContainer = ({ children }) => {
  return (
    <div className="navbar-item">
      <div className="buttons">{children}</div>
    </div>
  )
}

export default NavbarItemButtonContainer
