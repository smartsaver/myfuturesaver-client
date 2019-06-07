import React from 'react'
import { render } from '@testing-library/react'
import Preview from '../Preview'
const mockValues = {
  sender: 'the sender',
  message: 'the message',
  recepient: 'recepient',
}

describe('Preview Component', () => {
  it('Renders', () => {
    render(<Preview {...mockValues} />)
  })
})
