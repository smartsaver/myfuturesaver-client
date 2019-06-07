import React from 'react'
import { render } from '@testing-library/react'
import ImagePicker from '../ImagePicker'

describe('ImagePicker Component', () => {
  it('Renders', () => {
    const images = ['']
    render(<ImagePicker images={images} />)
  })
})
