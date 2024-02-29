const BotonJugueton = document.getElementById("BotonJugueton");

BotonJugueton.addEventListener('mouseover', () => {
  // Genera nuevas coordenadas para el botón
  const newX = Math.random() * (window.innerWidth - BotonJugueton.clientWidth);
  const newY = Math.random() * (window.innerHeight - BotonJugueton.clientHeight);

  // Aplica las nuevas coordenadas al estilo del botón
  BotonJugueton.style.left = `${newX}px`;
  BotonJugueton.style.top = `${newY}px`;
});