 const pageTop = document.querySelector('#home');
 
 const scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutQuint',
  speed: 700,
  speedAsDuration: true,
  clip: true,
   offset: 10 
});
