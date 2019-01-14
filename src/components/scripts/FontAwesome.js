import { Component } from 'react'

const fontAwesome = {
  src: 'https://use.fontawesome.com/releases/v5.6.3/js/all.js',
  integrity:
    'sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1',
  crossOrigin: 'anonymous',
  defer: true,
  async: true,
}

class FontAwesome extends Component {
  componentDidMount() {
    /* eslint-disable no-undef */
    const { src, integrity, crossOrigin, defer, async } = fontAwesome
    const script = document.createElement('script')
    script.src = src
    script.async = async
    script.defer = defer
    script.crossOrigin = crossOrigin
    script.integrity = integrity
    // inject the google script to the DOM
    document.body.appendChild(script)
  }

  render() {
    return null
  }
}

export default FontAwesome
