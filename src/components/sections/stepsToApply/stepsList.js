import React, { Component, Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import step1Logo from '../../../images/step1.png'
import step2Logo from '../../../images/step2.png'
import step3Logo from '../../../images/step3.png'
import step4Logo from '../../../images/step4.png'

const StepsListContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            filter: {
              frontmatter: { filePath: { regex: "/(stepsToApply/)/" } }
            }
            sort: { fields: frontmatter___order, order: ASC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  filePath
                  title
                  order
                }
                html
              }
            }
          }
        }
      `}
      render={data => <StepsList data={data} />}
    />
  )
}

class StepsList extends Component {
  renderSteps = () => {
    const { allMarkdownRemark } = this.props.data
    const { edges } = allMarkdownRemark
    return edges.map(({ node }) => {
      return (
        <article
          className="column is-6"
          key={node.id}
          dangerouslySetInnerHTML={{ __html: node.html }}
        />
      )
    })
  }

  render() {
    return <Fragment>{this.renderSteps()}</Fragment>
  }
}

export default StepsListContainer
