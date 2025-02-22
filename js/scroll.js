document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {

            header.classList.remove('hide');
            header.classList.add('show');
        } else if (currentScroll > lastScroll) {

            header.classList.remove('show');
            header.classList.add('hide');
        } else {

            header.classList.remove('hide');
            header.classList.add('show');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
