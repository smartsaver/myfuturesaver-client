import React from 'react'
import { render } from 'react-testing-library'
import ImagePicker from '../ImagePicker'

describe('ImagePicker Component', () => {
  it('Renders', () => {
    const images = ['']
    render(<ImagePicker images={images} />)
  })
})
