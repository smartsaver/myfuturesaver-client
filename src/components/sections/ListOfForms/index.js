import React, { Component } from 'react'
import TermsOfAgreementForm from './TermsOfAgreement'
import EmailForm from './EmailForm'

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
    const { isTermsOfAgreementAccepted } = this.state
    return (
      <div className="ListOfForms">
        <TermsOfAgreementForm
          isAccepted={isTermsOfAgreementAccepted}
          onSubmit={this.handleTermsOfAgreementSubmit}
        />
        <EmailForm isDisabled={isTermsOfAgreementAccepted} />
      </div>
    )
  }
}

export default ListOfForms
