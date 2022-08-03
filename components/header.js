/* headerComponet crea el contenido del componente, recibe como parametro el contendor */
function headerComponent(container) {
  /* Primero crea elemento del tipo div*/
  const headerEl = document.createElement("div");
  /*Luego le agrega contenido html*/
  headerEl.innerHTML = `<div class="header-navegador">
    <div class="header-logo">
      <a href="./index.html">
      <img src="./img/logo.png" alt="logo" class="header-component__logo"></a>
    </div>
      <div class="header-burguer">
        <div class="header-burguer-line"></div>
        <div class="header-burguer-line"></div>
        <div class="header-burguer-line"></div>
      </div>
    <nav class="header-nav">
      <button class="close-button-container">
        <img class="close-button" src="./img/close-button.png" alt="close-button">
      </button>
      <div class="header-nav-links">
        <a class="header-nav-li" href="./portfolio.html">Portfolio</a>
        <a class="header-nav-li" href="./servicios.html">Servicios</a>
        <a class="header-nav-li" href="./contacto.html">Contacto</a>
      </div>
    </nav>
  </div>`;

  container.appendChild(headerEl);
  hidenMenu();
  showMenu();
}
/*Funciones que permiten mostrar o esconder menu*/
function showMenu() {
  const burguerEl = document.querySelector(".header-burguer");
  const navEl = document.querySelector(".header-nav");
  burguerEl.addEventListener("click", () => (navEl.style.display = "flex"));
}

function hidenMenu() {
  const closeEl = document.querySelector(".close-button");
  const navEl = document.querySelector(".header-nav");
  closeEl.addEventListener("click", () => (navEl.style.display = "none"));
}
