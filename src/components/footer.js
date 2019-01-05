import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './footer.css'
import logo from '../images/logo-small.png'

const FooterContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { title: { eq: "footer" } }) {
          html
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
)

const Footer = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <footer className="footer Footer--blue">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <img src={logo} alt="SmartSAVER" />
            <p>Copyright SmartSAVER.org © 2018. All Rights Reserved.</p>
          </div>
          <div className="column is-half">
            <h3 className="title is-3">Contact Us</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterContainer
