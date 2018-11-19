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
  footer: processMarkdown(`
_Remember, children who are eligible for the Canada Learning Bond can receive a matching grant of 40% for every dollar deposited into their RESPs. That’s a bonus of 40 cents on top of every dollar that you contribute!_

__Questions?__ Call us at 1-855-737-7252 or email [info@smartsaver.org](mailto:info@smartsaver.org)
  `),
};

const applyOnline = {
  intro: processMarkdown(`
Please take a moment to read and accept the [terms of agreement.](http://www.smartsaver.org/privacy.shtml)
  `),
  termsOfAgreement: processMarkdown(`
\`\`\`
TERMS OF AGREEMENT

A. My participation in this program is entirely voluntary.

B. I give SmartSAVER permission to:

  i. Disclose my personal information for the purposes set out in SmartSAVER’s Privacy Policy to a Registered Education Savings Plans provider, and further I consent to the provider contacting me by phone or email to arrange an appointment to open an RESP and disclosing my personal information to Human Resources and Skills Development Canada. For more information about SmartSAVER’s privacy policy, please visit: http://www.smartsaver.org/privacy.shtml.

  ii. Collect, own, hold, and retain the right to the information that I provide.

  iii. Share my data anonymously with researchers for the purpose of studying the SmartSaver program. This means my name and any other identifying information won’t be shared. SmartSAVER may contact me in the future to ask me to complete additional survey questions. It is up to my discretion to respond or not. 

  iv. Help me to apply for my child's/children's Canada Learning Bond (CLB) and Canada Education Savings Grant (CESG)

C. I can withdraw my consent any time before March 31, 2019 by writing to SmartSAVER at info@smartsaver.org. 


*NOTE:
We collect your information for two reasons: 

1. To ensure the financial institution you choose has everything they need to make the process of opening your child’s/children’s RESP/s as easy for you as possible. Only your financial institution receives your identifiable personal information such as your name and contact information. (Researchers do not). 

2. To learn how to help more families like yours to start saving for their child’s/children’s education. The information shared with researchers is a random summary of all the participants in the program and does not include names or individual records.


If you do not agree to the pilot participant terms, you are not eligible to participate. You can still open an RESP and start saving for your child’s/children’s education. Visit: smartsaver.org.
\`\`\`
  `),
};

const content = {
  claim,
  whoCanParticipate,
  stepsToApply,
  applyOnline
};

module.exports = content;
