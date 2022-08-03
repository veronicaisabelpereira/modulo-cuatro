const footerComponent = (el) => {
  const footer = document.createElement("footer");
  footer.classList.add("footer-component");

  footer.innerHTML = `
          <div class="footer-component__container">
              <div class="footer-component__logo">
                  <a class="footer-component__logo-title" href="../../index.html"> <img src="./img/logo.png" alt="logo" class="header-component__logo"></a>
              </div>
              <div class="footer-component__social">
                  <ul class="footer-component__social-list">
                  <li class="list"><a href="https://www.instagram.com/veroniqueenelespacio/" target="_blank">Instagram <img src="./img/instagram.png"> </a></li>
                  <li class="list"><a href="https://www.linkedin.com/in/veronica-isabel-pereira-a349a392/" target="_blank">Linkedin <img src="./img/linkedin.png"> </a></li>
                  <li class="list"><a href="https://github.com/veronicaisabelpereira" target="_blank">GitHub <img src="./img/github.png"> </a></li>
                 
                  </ul>
              </div>
          </div>
      `;

  el.appendChild(footer);
};
