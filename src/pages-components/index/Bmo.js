import React from 'react'
import Section from '../../components/Section'
import { bmo } from './content/sponsorsContent'

import './Bmo.css'

const Bmo = () => {
  const { heading, logo, intro } = bmo
  return (
    <Section name="bmo" className="Bmo">
      <h3 className="title">{heading}</h3>
      <div className="columns">
        <div className="column is-one-third">
          <img className="image" src={logo} alt="Bank of Montreal" />
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

export default Bmo
