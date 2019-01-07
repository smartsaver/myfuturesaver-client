import React from 'react'
// import { Link } from 'gatsby'
import SmartSaverBanner from '../components/sections/SmartSaverBanner'

import HomeLayout from '../components/layouts/HomeLayout'
// import Image from '../components/image'
import SEO from '../components/Seo'
import ClaimSection from '../components/sections/Claim'
import ParticipateSection from '../components/sections/Participate'
import StepsToApplySection from '../components/sections/StepsToApply'
import ListOfFormsSection from '../components/sections/ListOfForms'

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
