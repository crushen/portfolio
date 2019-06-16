const scroll = new SmoothScroll('a[href*="#"]', {
   easing: 'easeInOutQuint',
   speed: 700,
   speedAsDuration: true,
   clip: true
 });

 const skillsBox = document.querySelectorAll('.skills-box');
 const line = document.querySelectorAll('.line');

for (let i = 0; i < skillsBox.length; i++) {
   skillsBox[i].addEventListener('mouseover', () => {
      line[i].classList.add('line-expand');
   });
}

for (let i = 0; i < skillsBox.length; i++) {
   skillsBox[i].addEventListener('mouseout', () => {
      line[i].classList.remove('line-expand');
   });
}
