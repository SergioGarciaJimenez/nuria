const features = document.querySelectorAll('.feature');
window.addEventListener('scroll', () => {
  features.forEach((feature) => {
    const featureTop = feature.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (featureTop < windowHeight - 100) {
      feature.classList.add('show');
    }
  });
});