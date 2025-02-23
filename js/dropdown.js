document.addEventListener('DOMContentLoaded', function() {
    const projetosLink = document.getElementById('projetos-link');
    const projetosIcon = document.getElementById('projetos-icon');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (projetosLink && projetosIcon && dropdownContent) {
        projetosLink.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            // Verifica se o dropdown está aberto ou fechado
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
    } else {
        console.error("Elementos do dropdown não encontrados. Verifique os IDs e classes.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Loop infinito
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1, // Número de slides visíveis
        spaceBetween: 10, // Espaço entre os slides
        breakpoints: {
            // Configurações responsivas
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Abrir/fechar dropdown de projetos
    const projetosLink = document.getElementById('projetos-link');
    const dropdownContent = document.querySelector('.dropdown-content');

    projetosLink.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownContent.classList.toggle('active');
    });
});