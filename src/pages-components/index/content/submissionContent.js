import { processMarkdown } from './index'
const submissionContent = {
  heading: '3. A. Submission',
  url: 'https://www.surveymonkey.com/r/5TZHVLK',
  intro: processMarkdown(`
Welcome back! We’re so excited to help you move on to the next step in the process.

By now, you have already:

1. Used our application to open a no-cost RESP and apply for your child’s Canada Learning Bond.
2. Completed the RESP paperwork with your financial institution.
3. Received the Canada Learning Bond in your child’s RESP.

Before we review your eligibility for a gift from SmartSAVER, please answer a few more research questions. This should only take you a few minutes.

__Note__: Please use _the same email address, primary caregiver’s and child’s first and last names_ that you used in the earlier steps of the process. Once you completed the survey a DONE button will appear. Scroll down to the next section below: __Submit Your CLB Statement.__

Remember! Your participation is entirely voluntary. If you change your mind, please notify us by phone at 1-855-737-7252 or by email at info@smartsaver.org before March 31, 2019.
  `),
  footer: processMarkdown(`
__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org

Did you complete the survey by clicking the __DONE__ button? Scroll down to the next section __below__: Submit Your CLB Statement.
  `),
}

export default submissionContent
