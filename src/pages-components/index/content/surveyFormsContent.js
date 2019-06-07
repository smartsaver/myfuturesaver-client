import { processMarkdown } from './index'

const surveyForms = {
  email: {
    heading: 'Enter Email',
    intro: processMarkdown(`
Please provide your email address so we can send you information about the next steps in the process.
    `),
    helpWhyEmail: processMarkdown(`
__Why do you need my email?__ We use email to send you reminders of where you are in the process and what’s coming next. If you don’t have access to an email of your own, consider asking a friend or support worker if you can use theirs.
    `),
    helpNoEmail: processMarkdown(`
__Don't have an email address?__ You can participate in the pilot by contacting ACORN Canada at 1-866-991-0025. 
        `),
  },
  informationSurvey: {
    heading: '1. Questionnaire',
    url: 'https://www.surveymonkey.com/r/3VJ2CN3',
    intro: processMarkdown(`
You'll be amazed at how quickly your child's/children's education savings will add up.

Please answer the following survey. This should only take you a few minutes.

Once you complete the survey a __DONE__ button will appear. Scroll down to the next section below: __RESP and CLB Application.__

___Remember!___ 
_Your participation is entirely voluntary. If you change your mind, please notify us by phone at 1-855-737-7252 or by email at info@smartsaver.org before March 31, 2019._
    `),
    footer: processMarkdown(`
__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org

Did you complete the survey by clicking the __DONE__ button? Scroll down to the next section __below__: RESP and CLB Application. 
    `),
  },
  respSurvey: {
    heading: '2. RESP and CLB Application',
    url: 'https://www.smartsaver.org/startmyresp/',
    intro: processMarkdown(`
___Remember!___ You can open a no-cost RESP and apply for your child’s/children’s education savings without contributing any of your own money, but that you can always choose to add your own money, let’s say $5 from a birthday gift from an aunt or uncle. That money will help your child’s education savings to grow!
    `),
    footer: processMarkdown(
      '__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org'
    ),
  },
  notParticipant: processMarkdown(`
You’ve completed this step in the 4-step easy process! You will receive an email confirming your application to open a no-cost RESP and apply for the Canada Learning Bond for your child.
  `),
}

const { email, informationSurvey, respSurvey } = surveyForms

export { email, informationSurvey, respSurvey }

export default surveyForms
