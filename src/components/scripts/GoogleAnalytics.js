import { Component } from 'react'

const googleAnalyticsUrl =
  'https://www.googletagmanager.com/gtag/js?id=UA-128967769-2'
const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-128967769-2');
`

class GoogleAnalytics extends Component {
  componentDidMount() {
    /* eslint-disable no-undef */
    // dont add google analytics on development
    const DEVELOPMENT = process.env.NODE_ENV === 'development'
    if (DEVELOPMENT) return
    const script = document.createElement('script')
    script.src = googleAnalyticsUrl
    script.async = true
    script.text = googleAnalyticsScript
    // inject the google script to the DOM
    document.body.appendChild(script)
  }

  render() {
    return null
  }
}

export default GoogleAnalytics
