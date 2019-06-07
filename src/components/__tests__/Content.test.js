import React from 'react'
import { render } from '@testing-library/react'
import Content from '../Content'

describe('Content Component', () => {
  it('Works', () => {
    render(<Content />)
  })
  it('renders html', () => {
    const htmlString = '<h1>Hello</h1>'
    const { container } = render(<Content html={htmlString} />)
    expect(container.querySelector('h1')).not.toBe(null)
  })
  it('Passes className and has .content className', () => {
    const className = 'fake__className'
    const { container } = render(<Content className={className} />)
    const div = container.firstElementChild
    expect(div.classList.contains('content')).toBe(true)
    expect(div.classList.contains(className)).toBe(true)
  })
})
