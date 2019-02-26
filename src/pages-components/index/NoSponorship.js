import React from 'react'
import Section from './SmartsaverSection'
import { notParticipant } from './content/applyOnlineContent'

const NoSponsorship = () => {
  const { heading, intro } = notParticipant
  return (
    <Section name="non-participant">
      <div className="columns">
        <div className="column is-one-third">
          <h3 className="title">{heading}</h3>
        </div>
        <div className="column is-two-thirds">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
        </div>
      </div>
    </Section>
  )
}

export default NoSponsorship
