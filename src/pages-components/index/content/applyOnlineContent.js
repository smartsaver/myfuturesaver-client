import { processMarkdown } from './index'

const applyOnline = {
  heading: 'Participate in this 4-step process',
  intro: processMarkdown(`
Please take a moment to read and accept the terms of agreement.
  `),
  termsOfAgreement: processMarkdown(`
__TERMS OF AGREEMENT__

A. My participation in this program is entirely voluntary.

B. I give SmartSAVER permission to:

i. Disclose my personal information for the purposes set out in SmartSAVER’s Privacy Policy to a Registered Education Savings Plans provider, and further I consent to the provider contacting me by phone or email to arrange an appointment to open an RESP and disclosing my personal information to Human Resources and Skills Development Canada. For more information about SmartSAVER’s privacy policy, please visit: [http://www.smartsaver.org/privacy.shtml](http://www.smartsaver.org/privacy.shtml).

ii. Collect, own, hold, and retain the right to the information that I provide.

iii. Share my data anonymously with researchers for the purpose of studying the SmartSaver program. This means my name and any other identifying information won’t be shared. SmartSAVER may contact me in the future to ask me to complete additional survey questions. It is up to my discretion to respond or not. 

iv. Help me to apply for my child's/children's Canada Learning Bond (CLB) and Canada Education Savings Grant (CESG)

C. I can withdraw my consent any time before March 31, 2019 by writing to SmartSAVER at info@smartsaver.org. 

*NOTE:

We collect your information for two reasons: 

1. To ensure the financial institution you choose has everything they need to make the process of opening your child’s/children’s RESP/s as easy for you as possible. Only your financial institution receives your identifiable personal information such as your name and contact information. (Researchers do not). 

2. To learn how to help more families like yours to start saving for their child’s/children’s education. The information shared with researchers is anonymized and does not include names or individual records.

If you do not agree to the pilot participant terms, you are not eligible to participate. You can still open an RESP and start saving for your child’s/children’s education. Visit: [smartsaver.org.](http://smartsaver.org)
  `),
}

const notParticipant = {
  heading: 'Not a Bank of Montreal (BMO) or Weathsimple family?',
  intro: processMarkdown(
    'You’ve completed this step in the 4-step easy process! You will receive an email confirming your application to open a no-cost RESP and apply for the Canada Learning Bond for your child.'
  ),
}

export { notParticipant }
export default applyOnline
