import React from 'react'
import HomeLayout from './HomeLayout'
import SEO from '../../components/Seo'
// import SmartSaverBanner from './SmartSaverBanner'
// import ClaimSection from './Claim'
// import ParticipateSection from './Participate'
// import ListOfFormsSection from './ListOfForms'
// import BmoSection from './Bmo'
// import WealthsimpleSection from './Wealthsimple'
// import NoSponsorshipSection from './NoSponorship'
// import SubmissionSurveyForm from './ListOfForms/SubmissionSurveyForm'
// import RespUploadSection from './RespUpload'
// import StepsToApplySection from './StepsToApply'
// import FaqSection from './Faq'
import CertificateApp from '../certificate-app'

const IndexPage = () => {
  return (
    <HomeLayout>
      <SEO title="Home" keywords={[`resp`, `myfuturesaver`, `education`]} />
      {/* <SmartSaverBanner />
      <ClaimSection />
      <ParticipateSection />
      <StepsToApplySection />
      <ListOfFormsSection />
      <BmoSection />
      <WealthsimpleSection />
      <NoSponsorshipSection />
      <SubmissionSurveyForm />
      <RespUploadSection /> */}
      <CertificateApp sectionName="certificate" />
      {/* <FaqSection /> */}
    </HomeLayout>
  )
}

export default IndexPage
