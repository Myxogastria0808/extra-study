$('[id^="nav-link-"]').on('click', function () {
    $('.icon').toggleClass('open');
    $('.sp-nav').slideToggle();
  });
  $('#sp-hamburger').on('click', function () {
    $('.icon').toggleClass('open');
    $('.sp-nav').slideToggle();
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-hamburger');

hamburger.addEventListener('click', () => {
    toggleClasses();
});


function toggleClasses() {
	hamburger.classList.toggle('open');
    menu.classList.toggle('open');
}

setTimeout(toggleClasses, 500);
setTimeout(toggleClasses, 3000);