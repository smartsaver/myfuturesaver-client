import React from 'react'
// import { Link } from 'gatsby'
import SmartSaverBanner from '../components/smartSaverBanner'

import HomeLayout from '../components/layouts/homeLayout'
// import Image from '../components/image'
import SEO from '../components/seo'
import ClaimSection from '../components/sections/claim'
import ParticipateSection from '../components/sections/participate'
import StepsToApplySection from '../components/sections/stepsToApply'

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" keywords={[`resp`, `myfuturesaver`, `education`]} />
    <SmartSaverBanner />
    <ClaimSection />
    <ParticipateSection />
    <StepsToApplySection />
  </HomeLayout>
)

export default IndexPage
