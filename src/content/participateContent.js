import processMarkdown from '../libs/marked'

const participateContent = {
  title: 'Who can participate?',
  content: processMarkdown(`
**Child/Children:**

- Born on or after January 1, 2004.
- Has a Social Insurance Number.
- Doesn't already have an RESP.

**Parent (Primary Caregiver):**

- Annual net family income under $46,000
- Has a Social Insurance Number.
- Has filed taxes (for at least one year of the child's life).
  `),
}

export default participateContent
