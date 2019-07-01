const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.nav-links');
const overlay = document.querySelector('#overlay');
const socialLinks = document.querySelector('#social-links');
let opened = false;

function addActive(element) {
  element.classList.add('active');
}
function removeActive(element) {
  element.classList.remove('active');
}

hamburger.addEventListener('click', () => {
  if(!opened) {
    addActive(hamburger);
    addActive(navList);
    addActive(socialLinks);
    for(let i = 0; i < navLinks.length; i++) {
      addActive(navLinks[i]);
     }
    overlay.classList.add('nav-is-active');
    opened = true;
   } else {
      removeActive(hamburger);
      removeActive(navList);
      removeActive(socialLinks);
      for(let i = 0; i < navLinks.length; i++) {
        removeActive(navLinks[i]);
      }
      overlay.classList.remove('nav-is-active');
      navList.classList.add('close-nav');
      opened = false;
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
    navList.classList.add('close-nav');
  }
  opened = false;
});

let prevScrollPos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.querySelector('nav').style.top = "20px";
    } else {
      document.querySelector('nav').style.top = "-70px";
    }
    prevScrollPos = currentScrollPos;
  }
