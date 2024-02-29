//Cargo las imagenes

const Elvis = document.getElementById("Elvis");
Elvis.src = "sources/elvis.png";

const Tamagochi = document.getElementById("Tamagochi");
Tamagochi.src = "sources/tamagochi.gif";

//Script para el botón juguetón
const BotonJugueton = document.getElementById("BotonJugueton");

BotonJugueton.addEventListener('mouseover', () => {
  // Genera nuevas coordenadas para el botón
  const newX = Math.random() * (window.innerWidth - BotonJugueton.clientWidth);
  const newY = Math.random() * (window.innerHeight - BotonJugueton.clientHeight);

  // Aplica las nuevas coordenadas al estilo del botón
  BotonJugueton.style.left = `${newX}px`;
  BotonJugueton.style.top = `${newY}px`;
});


// Script para animar a Javi - No era la idea original, pero me gusta más
const Javi = document.getElementById("JAVI");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

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
