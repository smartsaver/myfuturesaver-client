import React from 'react'
import { stepsList } from '../content/stepsToApplyContent'

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

const StepsList = () => {
  return (
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
  )
}

export default StepsList
