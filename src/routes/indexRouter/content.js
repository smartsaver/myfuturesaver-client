const processMarkdown = require('../../libs/marked');
const stepOptions = require('../../libs/marked/stepOptions');

const claim = processMarkdown(`
1. __Claim you child's Canada Learning Bond (CLB)__ - a federal grant of $500 to $2,000 to eligible families to help with the cost of a child's education after high school. 
2. __Participate in this pilot__ - you could receive an extra $500 from SmartSAVER to eligible families! _(Please note: A family can receive $500 only once, whether they are applying for one or more children.)_
    `);

const whoCanParticipate = processMarkdown(`
__Child/Children:__
* Born on or after January 1, 2004.
* Has a Social Insurance Number. 
* Doesn't already have an RESP.

__Parent (Primary Caregiver):__
* Annual net family income under $46,000
* Has a Social Insurance Number. 
* Has filed taxes (for at least one year of the child's life).
    `);

const stepsToApply = {
  intro: processMarkdown(`
You can sign up for the pilot in 4 easy steps that take place over the course of about 70 days. Each step can be completed quickly – most will take no more than a few minutes of your time.
  `),
  step1: processMarkdown(`
![Apply](/static/images/step1.png)

### 1. Apply

Use our online application or call 1-866-991-0025 to open a no-cost RESP and apply for the Canada Learning Bond.
  `, stepOptions),
  step2: processMarkdown(`
![Finalize](/static/images/step2.png)

### 2. Finalize

Receive a call from the financial institution you chose in Step 1 to complete the application process over the phone or in person. You will need to provide your identification, your Social Insurance Number (SIN), and your child's SIN to complete the application process. 
  `, stepOptions),
  step3: processMarkdown(`
![Confirm](/static/images/step3.png)

### 3. Confirm

It can take up to 2 months to receive the Canada Learning Bond in your RESP. When it arrives, submit your RESP or CLB Statement of Account to show us that you've received the Canada Learning Bond by applying through this pilot. 
  `, stepOptions),
  step4: processMarkdown(`
![Receive](/static/images/step4.png)

### 4. Receive

Eligible families could receive a financial gift of $500! (Please note: A family can receive $500 only once, whether they are applying for one or more children.)
  `, stepOptions),
};

const content = {
  claim,
  whoCanParticipate,
  stepsToApply
};

module.exports = content;
