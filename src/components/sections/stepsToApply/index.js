import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Section from '../../section'
import StepsList from './stepsList'

import './stepsToApply.css'

const StepsToApplyContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { filePath: { eq: "stepsToApply" } }) {
            frontmatter {
              title
            }
            html
          }
        }
      `}
      render={data => <StepsToApply data={data} />}
    />
  )
}

const StepsToApply = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Section className="Section--blue StepsToApply" name="steps-to-apply">
      <div className="columns is-multiline">
        <div className="column is-12">
          <h2 className="title">{frontmatter.title}</h2>
        </div>

        <div className="column is-12">
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="column is-12 Steps__container">
          <div className="columns is-multiline">
            <StepsList />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default StepsToApplyContainer
