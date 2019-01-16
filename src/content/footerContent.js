import processMarkdown from '../libs/marked'
import image from '../images/logo-small.png'

const footer = {
  intro: processMarkdown(`Copyright SmartSAVER.org © 2018. All Rights Reserved.
  `),
  otherLinks: processMarkdown(
    `[PRIVACY POLICY](http://www.smartsaver.org/privacy.shtml) | [TERMS &amp; CONDITIONS](http://www.smartsaver.org/terms-conditions.shtml)`
  ),
  image,
  contact: processMarkdown(`
info@smartsaver.org
1-855-RESP-CLB (1-855-737-7252)
  `),
  footer: processMarkdown(`Charitable Registration #136402948RR0001`),
}

export default footer
