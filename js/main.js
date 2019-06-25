const scroll = new SmoothScroll('a[href*="#"]', {
   easing: 'easeInOutQuint',
   speed: 700,
   speedAsDuration: true,
   clip: true
 });

 const skillsBox = document.querySelectorAll('.skills-box');
 const line = document.querySelectorAll('.line');
 const portfolioItem = document.querySelectorAll('.p-link');
 const pLine = document.querySelectorAll('.p-line');


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

for (let i = 0; i < portfolioItem.length; i++) {
   portfolioItem[i].addEventListener('mouseover', () => {
      pLine[i].classList.add('line-expand');
   });
}

for (let i = 0; i < portfolioItem.length; i++) {
   portfolioItem[i].addEventListener('mouseout', () => {
      pLine[i].classList.remove('line-expand');
   });
}
