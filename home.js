document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle logic
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const closeMenu = document.getElementById('close-menu');

    menuToggle.addEventListener('click', function () {
        navLinks.style.display = 'block';
    });

    closeMenu.addEventListener('click', function () {
        navLinks.style.display = 'none';
    });

    // Slideshow logic...
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        const slideshow = document.querySelector('.slideshow');
        slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, 6000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
});
