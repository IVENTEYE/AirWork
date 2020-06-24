const button = document.querySelector('.right-items__image-info-btn'),
      cookies = document.querySelector('.right-items__image-info');

button.addEventListener('click', (e) => {
    e.preventDefault();
    cookies.classList.add('remove');
});

new WOW().init();