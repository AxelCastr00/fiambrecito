// Manejo del menú desplegable
document.getElementById('hamburger').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active'); // Activa o desactiva la clase

  // Cambiar el ícono de hamburguesa a cruz
  const hamburgerIcon = this.querySelector('i');
  hamburgerIcon.classList.toggle('active');
});

// Asegurarse de que el menú se cierre al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      const navLinksContainer = document.querySelector('.nav-links');
      navLinksContainer.classList.remove('active'); // Cierra el menú
      const hamburgerIcon = document.getElementById('hamburger').querySelector('i');
      hamburgerIcon.classList.remove('active'); // Cambia el ícono de cruz a hamburguesa
  });
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
  const menuToggle = document.getElementById('hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  // Verifica si el clic fue fuera del menú y el botón
  if (!menuToggle.contains(event.target) && !navLinksContainer.contains(event.target)) {
      navLinksContainer.classList.remove('active'); // Cierra el menú
      const hamburgerIcon = menuToggle.querySelector('i');
      hamburgerIcon.classList.remove('active'); // Cambia el ícono de cruz a hamburguesa
  }
});
