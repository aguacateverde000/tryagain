const botonOfBar = document.getElementById('btn-bar');
const botonOfBarX = document.getElementById('close-barX');
const avisoOfBar = document.getElementById('ofBar');

const botonAceptarCookies = document.getElementById('acept');
const avisoCookies = document.getElementById('cookies-box');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

if(!localStorage.getItem('cookies-acepted')){
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
}

botonAceptarCookies.addEventListener('click', () => {
  avisoCookies.classList.remove('activo');
  fondoAvisoCookies.classList.remove('activo');

  localStorage.setItem('cookies-acepted', true);
})

botonOfBar.addEventListener('click', () => {
  avisoOfBar.classList.remove('activo');
});

botonOfBarX.addEventListener('click', () => {
  avisoOfBar.classList.remove('activo');
});