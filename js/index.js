// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  // Manejo del envío del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío real del formulario
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    form.reset(); // Reiniciar el formulario
  });
});

// Manejo del menú desplegable
document.getElementById('hamburger').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active'); // Activa o desactiva la clase

  // Cambiar el ícono de hamburguesa a cruz
  const hamburgerIcon = this.querySelector('i');
  hamburgerIcon.classList.toggle('active');
});

// Asegurarse de que el menú se cierre al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navLinksContainer = document.querySelector('.nav-links');
    navLinksContainer.classList.remove('active'); // Cierra el menú
    const hamburgerIcon = document.getElementById('hamburger').querySelector('i');
    hamburgerIcon.classList.remove('active'); // Cambia el ícono de cruz a hamburguesa
  });
});
