import React from 'react'
import Section from '../../section'
import stepsToApplyContent, {
  stepsList,
} from '../../../content/stepsToApplyContent'

import './stepsToApply.css'

const Step = ({ content, title, image }) => {
  return (
    <article key={title} className="Step column is-6 content has-text-centered">
      <img src={image} alt={title} />
      <div
        className="Step__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

const StepsToApply = () => {
  const { title, content } = stepsToApplyContent
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
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="columns">
                <Step
                  title={stepsList[0].title}
                  content={stepsList[0].content}
                  image={stepsList[0].image}
                />
                <Step
                  title={stepsList[1].title}
                  content={stepsList[1].content}
                  image={stepsList[1].image}
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="columns">
                <Step
                  title={stepsList[2].title}
                  content={stepsList[2].content}
                  image={stepsList[2].image}
                />
                <Step
                  title={stepsList[3].title}
                  content={stepsList[3].content}
                  image={stepsList[3].image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default StepsToApply
