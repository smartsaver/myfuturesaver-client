import React from 'react'
import SmartSaverBanner from '../components/sections/SmartSaverBanner'
import HomeLayout from '../components/layouts/HomeLayout'
import SEO from '../components/Seo/SeoWithGlobalScripts'
import ClaimSection from '../components/sections/Claim'
import ParticipateSection from '../components/sections/Participate'
import StepsToApplySection from '../components/sections/StepsToApply'
import ListOfFormsSection from '../components/sections/ListOfForms'
import BmoSection from '../components/sections/Bmo'
import WealthsimpleSection from '../components/sections/Wealthsimple'
import NoSponsorshipSection from '../components/sections/NoSponorship'
import RespSubmissionSection from '../components/sections/RespSubmission'
import FaqSection from '../components/sections/Faq'

const IndexPage = () => {
  return (
    <HomeLayout>
      <SEO title="Home" keywords={[`resp`, `myfuturesaver`, `education`]} />
      <SmartSaverBanner />
      <ClaimSection />
      <ParticipateSection />
      <StepsToApplySection />
      <ListOfFormsSection />
      <BmoSection />
      <WealthsimpleSection />
      <NoSponsorshipSection />
      <RespSubmissionSection />
      <FaqSection />
    </HomeLayout>
  )
}

export default IndexPage
