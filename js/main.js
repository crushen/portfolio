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

 const form = document.querySelector('#contact-form');
 const name = document.querySelector('#name');
 const email = document.querySelector('#email');
 const message = document.querySelector('#message');
 const error = document.querySelector('#form-error');
 const thanks = document.querySelector('#form-thanks');

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

function submitForm() {
   if(name.value === '' || email.value === '' || message.value === '') {
      error.style.display = 'block';
   }
   else {
      thanks.style.display = 'block';
      setTimeout(function() {
         form.submit();
      }, 3000);
   }
}

form.addEventListener('click', (e) => {
   if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      if(error.style.display === 'block'){
         error.style.display = 'none';
      }
      if(thanks.style.display === 'block') {
         name.value = '';
         email.value = '';
         message.value = '';
         thanks.style.display ='none';
      }
   }
});