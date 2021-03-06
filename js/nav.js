const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.nav-links');
const overlay = document.querySelector('#overlay');
const socialLinks = document.querySelector('#social-links');
let prevScrollPos = window.pageYOffset;
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

// For accessibility 
hamburger.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
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
    }
});

navList.addEventListener('click', (e) => {
  if(e.target.tagName === 'A') {
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

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
    document.querySelector('nav').style.top = "20px";
  } else {
    if(opened === false) {
      document.querySelector('nav').style.top = "-70px";
    } else {
      document.querySelector('nav').style.top = "20px";
    }
  }
  prevScrollPos = currentScrollPos;
}





