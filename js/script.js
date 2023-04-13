const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
  e.preventDefault();
  console.log(e.target.getAttribute('data-target'));
}

// Function toggle mobile menu
const hamburgerBtn = document.querySelector('#hamburger-btn');
const menu = document.querySelector('#mobile-menu');
const logo = document.querySelector('#logo');

hamburgerBtn.addEventListener('click', toggleOpen);
function toggleOpen() {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('hidden');
  // fade in effect from opacity-0 to opacity-100 doesn't work, why?
  menu.classList.toggle('trans');

  // switch the logo from black to white, when the mobile menu pops up
  menu.classList.contains('hidden')
    ? logo.setAttribute('src', './images/logo-bookmark.svg')
    : logo.setAttribute('src', './images/logo-bookmark-footer.svg');
}
