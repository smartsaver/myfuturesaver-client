import { processMarkdown } from './index'
import { stepOptions } from './index'
import step1Logo from '../../../images/step1.png'
import step2Logo from '../../../images/step2.png'
import step3Logo from '../../../images/step3.png'
import step4Logo from '../../../images/step4.png'

const processStep = content => processMarkdown(content, stepOptions)

const step1 = {
  title: 'Apply',
  image: step1Logo,
  content: processStep(`
### 1. Apply

Go on-line or call to start the process of opening your child's RESP and apply for the Canada Learning Bond. You will not be charged any fees can start the account with $0.
  `),
}

const step2 = {
  title: 'Finalize',
  image: step2Logo,
  content: processStep(`
### 2. Finalize

Complete the process with your chosen financial institution. You will provide your ID, including you and your child's Social Insurance Number (SIN) and sign your application.
  `),
}

const step3 = {
  title: 'Confirm',
  image: step3Logo,
  content: processStep(`
### 3. Confirm

Show us that you've received the Canada Learning Bond. Submit your RESP or CESP Statement of Account.
  `),
}

const step4 = {
  title: 'Receive',
  image: step4Logo,
  content: processStep(`
### 4. Receive

Celebrate taking these steps to start education savings for your child by accepting a financial bonus from SmartSAVER.
  `),
}

const stepsList = [step1, step2, step3, step4]

const stepsToApplyContent = {
  title: '4 Steps Process*',
  content: processMarkdown(`
You can sign up in 4 easy steps that take place over the course of about 70 days. Each step can be completed quickly – most will take no more than a few minutes of your time.
  `),
  note: processMarkdown(`
__* The entire process can take 2 months to complete due to processing times.__
  `),
  footer: processMarkdown(`
_Remember, children who are eligible for the Canada Learning Bond can receive an additional matching grant of 40% for every dollar deposited into their RESPs. That’s a bonus of 40 cents on top of every dollar that you contribute!_

__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org
  `),
}

export { stepsList }

export default stepsToApplyContent
