import React from 'react'

const NavbarItem = ({ text, href }) => {
  return (
    <a href={href} className="navbar-item">
      {text}
    </a>
  )
}

export default NavbarItem
