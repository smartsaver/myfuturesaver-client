import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Section from '../section'

const ParticipateContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { filePath: { eq: "participate" } }) {
            frontmatter {
              title
            }
            html
          }
        }
      `}
      render={data => <Participate data={data} />}
    />
  )
}

const Participate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Section className="Section--blue" name="participate">
      <div className="columns">
        <div className="column is-one-third">
          <h2 className="title">{frontmatter.title}</h2>
        </div>

        <div className="column is-two-thirds">
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Section>
  )
}

export default ParticipateContainer
