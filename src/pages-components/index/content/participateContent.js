import { processMarkdown } from './index'

const participateContent = {
  title: 'Who can participate?',
  content: processMarkdown(`
_MyFutureSAVER is currently open only to families in the Ottawa or Thorncliffe Park areas thanks to the generosity of local donors._

**Child/Children:**

- Born on or after January 1, 2004.
- Has a Social Insurance Number.
- Doesn't already have an RESP.

**Parent (Primary Caregiver):**

- Annual net family income under $46,000
- Has a Social Insurance Number.
- Has filed taxes (for at least one year of the child's life).
- Reside in the Ottawa area or Thorncliffe Park neighbourhood.
  `),
}

export default participateContent
