const processMarkdown = require('../../libs/marked');
const stepOptions = require('../../libs/marked/stepOptions');

const claim = processMarkdown(`
1. __Claim your child's Canada Learning Bond (CLB)__ - a federal grant of $500 to $2,000 to eligible families to help with the cost of a child's education after high school. 
2. __Participate in this 4-step process__ - an opportunity to receive an extra $150 for your family, PLUS $360 for your child’s education savings. That’s equal to $500* towards their future. _(Please note: SmartSAVER’s gift can only go to a family once, no matter how many children there are in the family.)_

_* Children who are eligible for the Canada Learning Bond can receive an additional matching grant of 40% for every dollar a parent deposits into their RESPs. That’s a bonus of $144 on top of the $360 that your child will receive into their RESP!_
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
You can sign up in 4 easy steps that take place over the course of about 70 days. Each step can be completed quickly – most will take no more than a few minutes of your time.
  `),
  step1: processMarkdown(`
![Apply](/static/images/step1.png)

### 1. Apply

Go on-line or call to start the process of opening your child's RESP and apply for the Canada Learning Bond. You will not be charged any fees can start the account with $0.
  `, stepOptions),
  step2: processMarkdown(`
![Finalize](/static/images/step2.png)

### 2. Finalize

Complete the process with your chosen financial institution. You will provide your ID, including you and your child's Social Insurance Number (SIN) and sign your application.
  `, stepOptions),
  step3: processMarkdown(`
![Confirm](/static/images/step3.png)

### 3. Confirm

Show us that you've received the Canada Learning Bond. Submit your RESP or CESP Statement of Account.
  `, stepOptions),
  step4: processMarkdown(`
![Receive](/static/images/step4.png)

### 4. Receive

Celebrate taking these steps to start education savings for your child by accepting a financial bonus from SmartSAVER.
  `, stepOptions),
  note: processMarkdown('__* The entire process can take 2 months to complete due to processing times.__'),
  footer: processMarkdown(`
_Remember, children who are eligible for the Canada Learning Bond can receive an additional matching grant of 40% for every dollar deposited into their RESPs. That’s a bonus of 40 cents on top of every dollar that you contribute!_

__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org
  `),
};

const applyOnline = {
  intro: processMarkdown(`
Please take a moment to read and accept the terms of agreement.
  `),
  termsOfAgreement: processMarkdown(`
TERMS OF AGREEMENT

A. My participation in this program is entirely voluntary.

B. I give SmartSAVER permission to:

  i. Disclose my personal information for the purposes set out in SmartSAVER’s Privacy Policy to a Registered Education Savings Plans provider, and further I consent to the provider contacting me by phone or email to arrange an appointment to open an RESP and disclosing my personal information to Human Resources and Skills Development Canada. For more information about SmartSAVER’s privacy policy, please visit: [http://www.smartsaver.org/privacy.shtml](http://www.smartsaver.org/privacy.shtml).

  ii. Collect, own, hold, and retain the right to the information that I provide.

  iii. Share my data anonymously with researchers for the purpose of studying the SmartSaver program. This means my name and any other identifying information won’t be shared. SmartSAVER may contact me in the future to ask me to complete additional survey questions. It is up to my discretion to respond or not. 

  iv. Help me to apply for my child's/children's Canada Learning Bond (CLB) and Canada Education Savings Grant (CESG)

C. I can withdraw my consent any time before March 31, 2019 by writing to SmartSAVER at info@smartsaver.org. 


*NOTE:
We collect your information for two reasons: 

1. To ensure the financial institution you choose has everything they need to make the process of opening your child’s/children’s RESP/s as easy for you as possible. Only your financial institution receives your identifiable personal information such as your name and contact information. (Researchers do not). 

2. To learn how to help more families like yours to start saving for their child’s/children’s education. The information shared with researchers is anonymized and does not include names or individual records.


If you do not agree to the pilot participant terms, you are not eligible to participate. You can still open an RESP and start saving for your child’s/children’s education. Visit: [smartsaver.org.](http://smartsaver.org)
  `),
  email: {
    intro: processMarkdown(`
Please provide your email address so we can send you information about the next steps in the process.
    `),
    helpWhyEmail: 'We use email to send you reminders of where you are in the process and what’s coming next. If you don’t have access to an email of your own, consider asking a friend or support worker if you can use theirs. ',
    helpNoEmail: 'You can participate in the pilot by contacting ACORN Canada at 1-866-991-0025.'
  },
  informationSurvey: {
    intro: processMarkdown(`
You'll be amazed at how quickly your child's/children's education savings will add up.

Please answer the following survey. This should only take you a few minutes.

Once you complete the survey a __DONE__ button will appear. Scroll down to the next section below: __RESP and CLB Application.__

___Remember!___ 
_You're participation is entirely voluntary. If you change your mind, please notify us by phone at 1-855-737-7252 or by email at info@smartsaver.org before March 31, 2019._
    `),
    footer: processMarkdown(`
__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org

Did you complete the survey by clicking the __DONE__ button? Scroll down to the next section __below__: RESP and CLB Application. 
    `),
  },
  respSurvey: {
    intro: processMarkdown(`
___Remember!___ You can open a no-cost RESP and apply for your child’s/children’s education savings without contributing any of your own money, but that you can always choose to add your own money, let’s say $5 from a birthday gift from an aunt or uncle. That money will help your child’s education savings to grow!
    `),
    footer: processMarkdown('__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org')
  },
  notParticipant: processMarkdown(`
You’ve completed this step in the 4-step easy process! You will receive an email confirming your application to open a no-cost RESP and apply for the Canada Learning Bond for your child.
  `),
};

const bmo = {
  intro: processMarkdown(`
BMO families must complete an additional form to permit BMO to deposit the gift from SmartSAVER directly into your child’s RESP.

Please __download__, __fill out__ and __sign__ the BMO Gift form now. Then email it as an attachment to SmartSAVER as soon as possible. Email to: info@smartsaver.org.
  `),
  download: '/download/562 Fillable (Sep 10_2018)_V2.pdf'
};

const wealthsimple = {
  intro: processMarkdown(`
The Wealthsimple RESP application is completed entirely online. The application covers the mandatory banking questions designed to ensure families have a clear understanding of the product they are selecting. Once the application has been successfully completed online, the RESP is opened.
  `)
};

const sponsors = {
  bmo,
  wealthsimple
};

const faq = {
  intro: processMarkdown(`
Questions? Read our frequently asked questions, or call us at 1-855-737-7252 or by email at info@smartsaver.org.
  `),
  download: '/download/Accelerator Pilot Participant FAQs_FNL.pdf'
};

const footer = {
  intro: processMarkdown('Copyright SmartSAVER.org © 2018. All Rights Reserved.'),
  footer: processMarkdown(`
#### Contact Us
info@smartsaver.org
1-855-RESP-CLB (1-855-737-7252)
  `)
};

const content = {
  claim,
  whoCanParticipate,
  stepsToApply,
  applyOnline,
  sponsors,
  faq,
  footer
};

module.exports = content;
