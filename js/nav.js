const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.nav-links');
const overlay = document.querySelector('#overlay');
const socialLinks = document.querySelector('#social-links');

function toggleActive(element) {
  element.classList.toggle('active');
}
function removeActive(element) {
  element.classList.remove('active');
}

hamburger.addEventListener('click', () => {
  toggleActive(hamburger);
  toggleActive(navList);
  toggleActive(socialLinks);
  for(let i = 0; i < navLinks.length; i++) {
    toggleActive(navLinks[i]);
  }
  overlay.classList.toggle('nav-is-active');
  if(overlay.classList.contains('nav-is-active')) {
    overlay.style.zIndex = '1';
  } else {
    overlay.style.zIndex = '-1';
  }
});

navList.addEventListener('click', (event) => {
  if(event.target.tagName === 'A') {
    removeActive(hamburger);
    removeActive(navList);
    removeActive(socialLinks);
    overlay.classList.remove('nav-is-active');
    for(let i = 0; i < navLinks.length; i++) {
      removeActive(navLinks[i]);
    }
    overlay.style.zIndex = '-1';
  }
});

