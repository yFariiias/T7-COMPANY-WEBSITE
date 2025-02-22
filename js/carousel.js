document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel__container');
    const carouselItems = document.querySelectorAll('.carousel__item');
    const dotsContainer = document.querySelector('.carousel__dots');
    let currentIndex = 0;

    carouselItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel__dot');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('carousel__dot--active');
            } else {
                dot.classList.remove('carousel__dot--active');
            }
        });
    }

    let autoplayInterval = setInterval(() => {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 10000);

    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            if (currentIndex < carouselItems.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000);
    });

    updateCarousel();
});
