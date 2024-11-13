let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  const slideWidth = document.querySelector(".slider").offsetWidth; // Get current slider width
  currentIndex = (index + totalSlides) % totalSlides;
  document.querySelector(".slides").style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

// Recalculate slide position on window resize
window.addEventListener("resize", () => showSlide(currentIndex));