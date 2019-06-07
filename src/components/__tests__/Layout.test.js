import React from 'react'
import { render } from 'react-testing-library'
import Layout from '../Layout'

describe('Vanilla Layout Component', () => {
  it('mounts and unmounts', () => {
    const { unmount } = render(<Layout />)
    unmount()
  })
  it('renders its children and className', () => {
    const mockChildren = 'Hello children'
    const mockClassName = 'fake-className'
    const { container } = render(
      <Layout className={mockClassName}>{mockChildren}</Layout>
    )
    expect(container.firstChild.classList.contains(mockClassName)).toBe(true)
    expect(container.textContent).toContain(mockChildren)
  })
})
