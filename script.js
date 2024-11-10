// Const animación

const elementsToAnimate = document.querySelectorAll('.feature, .summary img'); 

// Vars carrusel
let currentIndex = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");


// Animation script

window.addEventListener('scroll', () => {
  elementsToAnimate.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
});

// Carrusel

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index - 1;
  showSlide(currentIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => currentSlide(i + 1));
});

showSlide(currentIndex);