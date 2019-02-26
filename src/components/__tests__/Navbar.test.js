import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Navbar from '../Navbar'
import NavbarItem from '../Navbar/NavbarItem'

describe('Simple Navbar', () => {
  it('mounts and unmounts without errors', () => {
    const { unmount } = render(<Navbar />)
    unmount()
  })

  it('Menu appears and Burger becomes active onClick', () => {
    const { container } = render(<Navbar />)
    const burger = container.querySelector('.navbar-burger')
    const menu = container.querySelector('.navbar-menu')
    fireEvent.click(burger)
    expect(burger.classList.contains('is-active')).toBe(true)
    expect(menu.classList.contains('is-active')).toBe(true)
  })

  it('Renders Navbar Items', () => {
    const mockNavbarMenuText = 'Mocktext'
    const { getByText } = render(
      <Navbar navbarEnd={<NavbarItem text={mockNavbarMenuText} href="#" />} />
    )
    expect(getByText(mockNavbarMenuText).textContent).toBe(mockNavbarMenuText)
  })
})
