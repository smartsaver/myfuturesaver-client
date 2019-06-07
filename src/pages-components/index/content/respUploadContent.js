import { processMarkdown } from './index'

const respSubmission = {
  heading: '3. B. Submit Your CLB Statement',
  intro: processMarkdown(`
It’s time to show us that your child received the Canada Learning Bond!

Submit your RESP Statement from your bank OR your CESP Statement of Account from the Government of Canada. __We only require one statement of account whether you applied for one or more children__ since SmartSAVER’s gift can only go to a family once, no matter how many children there are in the family.

Please fill out the form to upload your statement:
  `),
  footer: processMarkdown(`
Thank you for submitting your statement!

You will receive an email within 2-3 days. The email will confirm your eligibility to receive a gift from SmartSAVER for completing the process.

__Having Problems?__ You can submit your RESP statement from your bank OR your CESP Statement of Account from the government by scanning or taking a snapshot of the statement with your phone and emailing it to us at info@smartsaver.org. Please include your first and last name in the body of the email.
  `),
}

export default respSubmission
