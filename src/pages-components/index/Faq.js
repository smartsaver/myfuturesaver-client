import React from 'react'
import Section from './SmartsaverSection'
import faqContent from './content/faqContent'

const Faq = () => {
  const { heading, intro, download } = faqContent
  return (
    <Section name="faq">
      <div className="columns">
        <div className="column is-one-third">
          <h3 className="title">{heading}</h3>
        </div>
        <div className="column is-two-thirds">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
          <a href={download} className="button is-primary" download>
            <i className="fa fa-download" /> Download {"FAQ's"}
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Faq
