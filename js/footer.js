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