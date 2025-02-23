// Dropdown Menu
    
    document.addEventListener('DOMContentLoaded', function() {
    const projetosLink = document.getElementById('projetos-link');
    const projetosIcon = document.getElementById('projetos-icon');
    const dropdownContent = document.querySelector('.dropdown-content');

    let lastScrollTop = 0;

    if (projetosLink && projetosIcon && dropdownContent) {
        projetosLink.addEventListener('click', function(e) {
            e.preventDefault();

            const isDropdownOpen = dropdownContent.classList.contains('active');

            dropdownContent.classList.toggle('active');

            if (!isDropdownOpen) {
                projetosIcon.classList.remove('fa-angle-down');
                projetosIcon.classList.add('fa-angle-up');
            } else {
                projetosIcon.classList.remove('fa-angle-up');
                projetosIcon.classList.add('fa-angle-down');
            }
        });

        document.addEventListener('click', function(e) {
            if (!dropdownContent.contains(e.target) && !projetosLink.contains(e.target)) {
                dropdownContent.classList.remove('active');
                projetosIcon.classList.remove('fa-angle-up');
                projetosIcon.classList.add('fa-angle-down');
            }
        });

  
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop){
               
            } else {
                
                dropdownContent.classList.remove('active');
                projetosIcon.classList.remove('fa-angle-up');
                projetosIcon.classList.add('fa-angle-down');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        }, false);
    } else {
        console.error("Elementos do dropdown não encontrados. Verifique os IDs e classes.");
    }
});

// Página ativa
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    if (currentPage !== 'index.html') {
        header.classList.add('page-active');
    }
});