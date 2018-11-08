var form = document.querySelector('.js-form');

form.addEventListener('submit', showSurvey);

function showSurvey(event) {
  event.preventDefault();
  console.log(event);
  var survey = document.querySelector('.survey');

  var success = document.querySelector('.thank-you');

  form.style.display = 'none';
  survey.style.display = 'block';
  success.style.display = 'block';

  Velocity(survey, "scroll", {duration: 500});
}
