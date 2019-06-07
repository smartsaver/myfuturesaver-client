import processMarkdown from '../../libs/marked'

const certificateInstructions = processMarkdown(`
Make a certificate now!

_To see the pdf preview, click __'See preview'__ Button_
`)

export default {
  certificateInstructions,
}
