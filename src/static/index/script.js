$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $('[data-toggle="popover"]').popover()
})

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
