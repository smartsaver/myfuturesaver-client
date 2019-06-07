import { processMarkdown } from './index'

const claim = {
  title: 'Two things you can claim for your children',
  content: processMarkdown(`
1. **Claim your child's Canada Learning Bond (CLB)** - a federal grant of $500 to $2,000 to eligible families to help with the cost of a child's education after high school.

2. **Participate in this 4-step process** - an opportunity to receive an extra $150 for your family, PLUS $360 for your child’s education savings. That’s equal to $500* towards their future. (Please note: SmartSAVER’s gift can only go to a family once, no matter how many children there are in the family.)

_* Children who are eligible for the Canada Learning Bond can receive an additional matching grant of 40% for every dollar a parent deposits into their RESPs. That’s a bonus of $144 on top of the $360 that your child will receive into their RESP!_
  `),
}

export default claim
