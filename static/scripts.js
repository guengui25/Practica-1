//Script para el botón juguetón
const BotonJugueton = document.getElementById("BotonJugueton");

BotonJugueton.addEventListener('mouseover', () => {
  // Genera nuevas coordenadas para el botón
  const newX = Math.random() * (globalThis.innerWidth - BotonJugueton.clientWidth);
  const newY = Math.random() * (globalThis.innerHeight - BotonJugueton.clientHeight);

  // Aplica las nuevas coordenadas al estilo del botón
  BotonJugueton.style.left = `${newX}px`;
  BotonJugueton.style.top = `${newY}px`;
});


// Script para animar a Javi - No era la idea original, pero me gusta más
const Javi = document.getElementById("JAVI");
const screenWidth = globalThis.innerWidth;
const screenHeight = globalThis.innerHeight;

let x = 0;
let y = 0;
let xSpeed = 5;
let ySpeed = 5;

const arrayImages = ["sources/javi-1.jpg", "sources/javi-2.jpg"];

function checkCollision() {

    const randomImage = Math.random() > 0.5 ? 0 : 1;

    if (x + Javi.width >= screenWidth || x <= 0 || y + Javi.height >= screenHeight || y <= 0) {
        // Cambiar la imagen cuando hay colisión
        Javi.src = arrayImages[randomImage];
    } else {
        Javi.src = arrayImages[randomImage]
    }
}

// Función para animar a Javi
function animateImage() {
  x += xSpeed;
  y += ySpeed;

  checkCollision();

  if (x + Javi.width >= screenWidth || x <= 0) {
    xSpeed = -xSpeed;
  }

  if (y + Javi.height >= screenHeight || y <= 0) {
    ySpeed = -ySpeed;
  }

  Javi.style.left = x + 'px';
  Javi.style.top = y + 'px';

  requestAnimationFrame(animateImage);
}

animateImage();

// Para reproducir un sonido
function playSound(soundId) {
  var audio = document.getElementById(soundId);
  audio.play();
}

// Para mover a sonic
function moverSonic() {
  var sonic = document.getElementById('Sonic');

  // Obtener dimensiones de la ventana
  var windowWidth = window.innerWidth - sonic.clientWidth;
  var windowHeight = window.innerHeight - sonic.clientHeight;

  // Generar posiciones aleatorias para top y left
  var randomTop = Math.floor(Math.random() * windowHeight);
  var randomLeft = Math.floor(Math.random() * windowWidth);

  // Aplicar nuevas posiciones
  sonic.style.top = randomTop + 'px';
  sonic.style.left = randomLeft + 'px';
}

// Para el otro javi
function changeHeman() {
  document.getElementById('He-man').src = '/sources/javi-heman.jpeg';
}

function restoreHeman() {
  document.getElementById('He-man').src = '/sources/He-man.jpg';
}