function Effects() {
  function scrollTo(containerName) {
    $(containerName).velocity('scroll', {
      duration: 800
    });
  }

  function fadeIn(elementName) {
    $(elementName).velocity('fadeIn', { display: 'block' });
  }

  function fadeOut(elementName) {
    $(elementName).velocity('fadeOut', {
      display: 'none'
    });
  }

  return {
    scrollTo,
    fadeIn,
    fadeOut
  }
}

document.addEventListener("DOMContentLoaded", function runScripts() {
  var effects = new Effects();
  var navLinkList = document.querySelectorAll('.js-nav-link');
  var termsOfAgreementForm = document.querySelector('.js-terms-of-agreement-form');
  var emailForm = document.querySelector('.js-email-form');

  // enable popover
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  // hookup click selectors for the nav link
  navLinkList.forEach(handleNavLink);
  // hookup termsOfAgreement submit
  termsOfAgreementForm.addEventListener('submit', handleTermsOfAgreementSubmit);
  // email form submit
  emailForm.addEventListener('submit', handleEmailFormSubmit);

  function handleNavLink(navLink) {
    navLink.addEventListener('click', handleNavLinkClick);

    function handleNavLinkClick(event) {
      event.stopPropagation();
      event.preventDefault();
      var containerId = event.target.getAttribute('href');
      //smooth scroll
      effects.scrollTo(containerId);
      // then push history
      history.pushState({}, "", containerId);
    }
  }

  function handleTermsOfAgreementSubmit(event) {
    event.preventDefault();
    var userDidAgree = event.target['agree-checkbox'].checked;
    if(userDidAgree) {
      insertSuccessMessage();
      fadeOutTermsOfAgreementForm();
      enableAllApplicationForm();
    }

    function insertSuccessMessage() {
      var alert = document.querySelector('.js-terms-of-agreement-alert');
      alert.textContent = 'Thank you. You may now fill out the application forms.';
      // fade in alert message
      alert.classList.add('alert-success');
      alert.classList.remove('d-none');
      $(alert)
        .velocity("fadeIn", { duration: 1500 });
    }

    function fadeOutTermsOfAgreementForm() {
      $(event.target).velocity("fadeOut", { duration: 100 })
    }

    function enableAllApplicationForm() {
      var applicationFormList = document.querySelectorAll('.js-application-form');
      applicationFormList.forEach(function(applicationForm) {
        applicationForm.classList.remove('element--covered');
      });
    }
  }

  function handleEmailFormSubmit(event) {
    event.preventDefault();
    var emailField = event.target['email-field'];
    var emailButton = emailForm.querySelector('button');
    //disable field and button
    emailField.disabled = true;
    emailButton.disabled = true;
    // post to server
    axios.post('/api/email/subscribe', {
      email: emailField.value
    });
  }
})
