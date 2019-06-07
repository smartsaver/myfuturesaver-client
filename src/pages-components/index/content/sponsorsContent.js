import { processMarkdown } from './index'
import bmoFormDownload from '../../../download/562 Fillable (Sep 10_2018)_V2.pdf'
import bmoLogo from '../../../images/bmo-logo.jpg'
import wealthsimpleLogo from '../../../images/wealthsimple-logo.png'

const bmo = {
  heading: 'Attention Bank of Montreal (BMO) applicants!',
  intro: processMarkdown(`
BMO families must complete an additional form to permit BMO to deposit the gift from SmartSAVER directly into your child’s RESP.

Please __download__, __fill out__ and __sign__ the BMO Gift form now. Then email it as an attachment to SmartSAVER as soon as possible. Email to: info@smartsaver.org.
  `),
  logo: bmoLogo,
  download: bmoFormDownload,
}

const wealthsimple = {
  heading: 'Attention WealthSimple applicants!',
  intro: processMarkdown(`
The Wealthsimple RESP application is completed entirely online. The application covers the mandatory banking questions designed to ensure families have a clear understanding of the product they are selecting. Once the application has been successfully completed online, the RESP is opened.
  `),
  logo: wealthsimpleLogo,
}

const sponsors = {
  bmo,
  wealthsimple,
}

export { bmo, wealthsimple }

export default sponsors
