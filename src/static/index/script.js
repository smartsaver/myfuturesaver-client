var form = document.querySelector('.js-form');

var jumpToSurvey = document.querySelector('.js-jump-to-survey');

form.addEventListener('submit', handleFormSubmit);

jumpToSurvey.addEventListener('click', handleScrollToSurvey);

function handleFormSubmit(event) {
  event.preventDefault();
  var survey = document.querySelector('.js-survey');
  survey.innerHTML = `
  <iframe src="https://www.surveymonkey.com/r/Z9YDLVP" frameborder="0"></iframe>
  `;

  fadeIn(survey);

  showThanksAndHideEmail();
}

function showThanksAndHideEmail() {
  var success = document.querySelector('.js-success');

  fadeIn(success);
  fadeOut(form);
}

function handleScrollToSurvey() {
  var container = document.querySelector('.js-survey-container');

  Velocity(container, 'scroll', {
    duration: 800
  });
}

function fadeIn(element) {
  Velocity(element, 'fadeIn', { display: 'block' });
}

function fadeOut(element) {
  Velocity(element, 'fadeOut', {
    display: 'none'
  });
}
