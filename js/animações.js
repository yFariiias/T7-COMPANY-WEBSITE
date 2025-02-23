// Animação do header

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScroll = 0;
    const threshold = 80;

    function handleScroll() {
        const currentScroll = window.scrollY;

        if (currentScroll <= threshold) {

            header.classList.remove('hide');
            header.classList.add('show');
        } else if (currentScroll < lastScroll) {

            if (currentScroll <= threshold) {

                header.classList.remove('hide');
                header.classList.add('show');
            } else {

                header.classList.remove('show');
                header.classList.add('hide');
            }
        } else if (currentScroll > lastScroll) {

            header.classList.remove('show');
            header.classList.add('hide');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});

// Animação do footer

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const footerPosition = footer.offsetTop;

        
        if (scrollPosition > footerPosition - 100) {

            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        } else {

            footer.style.opacity = "0";
            footer.style.transform = "translateY(20px)";
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Proibição de arrastar elementos

document.addEventListener('dragstart', function(e) {
    e.preventDefault(); //Para ativar remova a palavra "desativado"
});


// Animação dos elementos Projetos e Main-content
document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".hidden");

    function checkScroll() {
        elementsToAnimate.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("fade-in");
                element.classList.remove("hidden");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Animação boas vinda
document.addEventListener("DOMContentLoaded", function() {
    const textContent = document.querySelector('.text-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(textContent);
});