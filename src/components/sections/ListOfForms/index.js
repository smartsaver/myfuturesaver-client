import React, { Component } from 'react'
import TermsOfAgreementForm from './TermsOfAgreement'

class ListOfForms extends Component {
  state = {
    isTermsOfAgreementAccepted: false,
  }

  handleTermsOfAgreementSubmit = event => {
    event.preventDefault()
    this.setState({
      isTermsOfAgreementAccepted: event.target.termsOfAgreementCheckbox.checked,
    })
  }

  render() {
    return (
      <div className="ListOfForms">
        <TermsOfAgreementForm
          isAccepted={this.state.isTermsOfAgreementAccepted}
          onSubmit={this.handleTermsOfAgreementSubmit}
        />
      </div>
    )
  }
}

export default ListOfForms
