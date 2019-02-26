import React from 'react'
import Section from '../../components/Section'
import { wealthsimple as wealthsimpleContent } from '../../content/sponsorsContent'

import './Wealthsimple.css'

const Wealthsimple = () => {
  const { heading, logo, intro } = wealthsimpleContent
  return (
    <Section name="wealthsimple" className="Wealthsimple">
      <h3 className="title">{heading}</h3>
      <div className="columns">
        <div className="column is-one-third">
          <img className="image" src={logo} alt="Wealthsimple" />
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

export default Wealthsimple
