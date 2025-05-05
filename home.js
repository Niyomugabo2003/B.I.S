// filepath: c:\Users\IPRC MUSANZE\Desktop\design\supermarket\hom.js
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    // Remove active class from current slide and dot
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    // Update current index
    currentIndex = index;

    // Add active class to new slide and dot
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    // Move the slideshow container
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
},6000); //6000 milliseconds = 6 seconds
// Add click event to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});