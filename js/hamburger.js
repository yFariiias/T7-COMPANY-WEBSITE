document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    const headerSocial = document.querySelector('.header__social');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        headerSocial.classList.toggle('active');
    });
});
