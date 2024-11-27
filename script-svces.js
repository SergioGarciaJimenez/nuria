const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.service-card');
    card.classList.toggle('expanded');
    if (card.classList.contains('expanded')) {
      button.style.display = "none";
    } else {
      button.textContent = "Más Detalles";
    }
  });
});