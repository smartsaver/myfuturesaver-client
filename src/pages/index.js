import React from 'react'
// import { Link } from 'gatsby'
import SmartSaverBanner from '../components/smartSaverBanner'

import HomeLayout from '../components/layouts/homeLayout'
// import Image from '../components/image'
import SEO from '../components/seo'
import ClaimSection from '../components/sections/claim'
import ParticipateSection from '../components/sections/participate'
import StepsToApplySection from '../components/sections/stepsToApply'
import ListOfFormsSection from '../components/sections/listOfForms'

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" keywords={[`resp`, `myfuturesaver`, `education`]} />
    <SmartSaverBanner />
    <ClaimSection />
    <ParticipateSection />
    <StepsToApplySection />
    <ListOfFormsSection />
  </HomeLayout>
)

export default IndexPage
