const processMarkdown = require('../../libs/marked');

const content = {
  claim: processMarkdown(`
1. __Claim you child's Canada Learning Bond (CLB)__ - a federal grant of $500 to $2,000 to eligible families to help with the cost of a child's education after high school. 
2. __Participate in this pilot__ - you could receive an extra $500 from SmartSAVER to eligible families! (Please note: A family can receive $500 only once, whether they are applying for one or more children.)
`),

  whoCanParticipate: processMarkdown(`
__Child/Children:__
* Born on or after January 1, 2004.
* Has a Social Insurance Number. 
* Doesn't already have an RESP.

__Parent (Primary Caregiver):__
* Annual net family income under $46,000
* Has a Social Insurance Number. 
* Has filed taxes (for at least one year of the child's life).
`),
};

module.exports = content;
