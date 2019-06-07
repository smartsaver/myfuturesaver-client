import React from 'react'
import Section from './SmartsaverSection'
import participateContent from './content/participateContent'

const Participate = () => {
  const { title, content } = participateContent
  return (
    <Section name="participate">
      <div className="columns">
        <div className="column is-one-third">
          <h2 className="title">{title}</h2>
        </div>

        <div className="column is-two-thirds">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </Section>
  )
}

export default Participate
