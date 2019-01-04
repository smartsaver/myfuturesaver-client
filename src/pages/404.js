import React from 'react'

import HomeLayout from '../components/layouts/homeLayout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <HomeLayout>
    <SEO title="404: Not found" />
    <h1>Page Not Found.</h1>
  </HomeLayout>
)

export default NotFoundPage
