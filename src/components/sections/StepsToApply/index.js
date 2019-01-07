import React from 'react'
import Section from '../../Section'
import stepsToApplyContent from '../../../content/stepsToApplyContent'
import StepsList from './stepsList'
import logo from '../../../images/logo-for-white.jpg'

import './stepsToApply.css'

const StepsToApply = () => {
  const { title, content, note, footer } = stepsToApplyContent
  return (
    <Section className="Section--blue StepsToApply" name="steps-to-apply">
      <div className="columns is-multiline">
        <div className="column is-12">
          <h2 className="title">{title}</h2>
        </div>
        <div className="column is-12">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="column is-12 Steps__container">
          <StepsList />
        </div>
        <div className="column is-12">
          <div className="columns">
            <div
              className="column is-8 Note__content"
              dangerouslySetInnerHTML={{ __html: note }}
            />
            <div className="column is-4 has-text-centered">
              <img src={logo} className="Note__logo" alt="SmartSAVER" />
            </div>
          </div>
        </div>
        <div
          className="column is-12 content"
          dangerouslySetInnerHTML={{ __html: footer }}
        />
      </div>
    </Section>
  )
}

export default StepsToApply
