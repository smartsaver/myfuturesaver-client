import React, { Component } from 'react'
import TermsOfAgreementForm from './termsOfAgreement'

class ListOfForms extends Component {
  state = {
    isTermsOfAgreementAccepted: false,
  }

  handleTermsOfAgreementSubmit = () => {
    // console.log('submitted the form')
  }

  render() {
    return (
      <div className="ListOfForms">
        <TermsOfAgreementForm onSubmit={this.handleTermsOfAgreementSubmit} />
      </div>
    )
  }
}

export default ListOfForms
