// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evitar el envío real del formulario
      alert('Mensaje enviado. ¡Gracias por contactarnos!');
      form.reset(); // Reiniciar el formulario
  });
});

// script.js
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Activa o desactiva la clase
});
