import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from '../../../__mocks__/gatsby'
import IndexPage from '../index'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: 'title',
          description: 'description',
          author: 'author',
        },
      },
    })
  )
})

describe('Index Page', () => {
  it('Renders', () => {
    render(<IndexPage />)
  })
})
