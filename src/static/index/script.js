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

  // enable popover
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  navLinkList.forEach(handleNavLink);

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
});
