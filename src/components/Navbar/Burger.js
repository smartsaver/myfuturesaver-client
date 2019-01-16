import React from 'react'

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

export default Burger
