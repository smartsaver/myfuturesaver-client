import { processMarkdown } from './index'
import faqDownload from '../../../download/Accelerator Pilot Participant FAQs_FNL.pdf'

const faq = {
  heading: "FAQ's",
  intro: processMarkdown(
    'Questions? Read our frequently asked questions, or call us at __1-855-737-7252__ or by email at info@smartsaver.org.'
  ),
  download: faqDownload,
}

export default faq
