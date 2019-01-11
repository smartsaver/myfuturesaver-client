import processMarkdown from '../libs/marked'

const respSubmission = {
  heading: 'Submit Your CLB Statement',
  intro: processMarkdown(`
It’s time to show us that your child received the Canada Learning Bond!

Submit your RESP Statement from your bank OR your CESP Statement of Account from the Government of Canada. __We only require one statement of account whether you applied for one or more children__ since SmartSAVER’s gift can only go to a family once, no matter how many children there are in the family.

Please fill out the form to upload your statement:
  `),
}

export default respSubmission
