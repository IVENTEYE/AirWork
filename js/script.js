const button = document.querySelector('.right-items__image-info-btn'),
      cookies = document.querySelector('.right-items__image-info');

button.addEventListener('click', (e) => {
    e.preventDefault();
    cookies.classList.add('remove');
});

const links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const blockId = link.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
      });
    });
  }

new WOW().init();