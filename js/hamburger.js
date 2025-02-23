document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const headerSocial = document.querySelector('.header__social');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        headerSocial.classList.toggle('active');
    });
});