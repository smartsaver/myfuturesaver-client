import processMarkdown from '../libs/marked'

const respSubmission = {
  heading: 'Submit your application form here.',
  intro: processMarkdown(
    'Fill out this form. This will be emailed to info@smartsaver.org'
  ),
}

export default respSubmission
