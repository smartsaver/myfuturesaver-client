import React, { Component } from 'react'
import SurveyForm from '../../../components/SurveyForm'

const mailChimpFormEmbed = {
  html: `
  <!-- Begin Mailchimp Signup Form -->
  <link href="https://cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
  <style type="text/css">
      #mc_embed_signup{ clear:left; }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup">
  <form action="https://smartsaver.us2.list-manage.com/subscribe/post?u=4ae26ecf4362bcc491c05e1c4&amp;id=7efaf949fd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
      
  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
  <div class="mc-field-group">
      <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
  </label>
      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
  </div>
      <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
      </div>    
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4ae26ecf4362bcc491c05e1c4_7efaf949fd" tabindex="-1" value=""></div>
      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
  </form>
  </div>
  <!-- handled by react already. -->
  <!-- <script type='text/javascript' src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' ></script> -->
  <!--
  <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
  -->
  <!--End mc_embed_signup-->
  `,
  scriptUrl:
    'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
  scriptText: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);`,
}

class MailChimpForm extends Component {
  componentDidMount() {
    this.renderMailChimpForm()
  }

  renderMailChimpForm() {
    /* eslint-disable no-undef */
    const mailChimpFormContainer = document.querySelector('.js-mailChimpForm')
    const mailChimpScriptOne = document.createElement('script')
    const { html, scriptText, scriptUrl } = mailChimpFormEmbed
    // inject mail chimp form
    mailChimpFormContainer.innerHTML = html
    // inject library script and execute
    mailChimpScriptOne.src = scriptUrl
    mailChimpScriptOne.defer = true
    mailChimpScriptOne.async = true
    mailChimpScriptOne.text = scriptText
    document.body.appendChild(mailChimpScriptOne)
  }

  render() {
    const { isEnabled } = this.props
    return (
      <SurveyForm
        isEnabled={isEnabled}
        overlayText="Read and agree to the terms of agreement before proceeding."
      >
        <div className="js-mailChimpForm" />
      </SurveyForm>
    )
  }
}

export default MailChimpForm
