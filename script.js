const elementsToAnimate = document.querySelectorAll('.feature, .summary img'); // Selecciona features e imagen en summary

window.addEventListener('scroll', () => {
  elementsToAnimate.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
});