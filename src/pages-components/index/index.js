import React, { lazy, Suspense } from 'react'
import HomeLayout from './HomeLayout'
import SEO from '../../components/Seo'
import SmartSaverBanner from './SmartSaverBanner'
import ClaimSection from './Claim'
import ParticipateSection from './Participate'
import ListOfFormsSection from './ListOfForms'
import BmoSection from './Bmo'
import WealthsimpleSection from './Wealthsimple'
import NoSponsorshipSection from './NoSponorship'
import SubmissionSurveyForm from './ListOfForms/SubmissionSurveyForm'
import RespUploadSection from './RespUpload'
import StepsToApplySection from './StepsToApply'
import FaqSection from './Faq'
import ErrorBoundary from '../../components/ErrorBoundary'

const CertificateApp = lazy(() => import('../certificate-app/index'))

const LazyCertificateApp = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <CertificateApp sectionName="certificate" />
      </Suspense>
    </ErrorBoundary>
  )
}

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
      <SubmissionSurveyForm />
      <RespUploadSection />
      <LazyCertificateApp />
      <FaqSection />
    </HomeLayout>
  )
}

export default IndexPage
