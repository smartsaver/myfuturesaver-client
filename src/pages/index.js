import React from 'react'
import { Link } from 'gatsby'
import SmartSaverBanner from '../components/smartSaverBanner'

import HomeLayout from '../components/layouts/homeLayout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" keywords={[`resp`, `myfuturesaver`, `education`]} />
    <SmartSaverBanner />
    <div className="container">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </HomeLayout>
)

export default IndexPage
