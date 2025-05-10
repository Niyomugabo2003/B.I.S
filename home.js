document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle logic
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", function () {
    navLinks.style.display = "block";
  });

  closeMenu.addEventListener("click", function () {
    navLinks.style.display = "none";
  });

  // Slideshow logic
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;

  function showSlide(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    const slideshow = document.querySelector(".slideshow");
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Auto-slide
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 6000);

  // Dot click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Arrow button click
  prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });
});
