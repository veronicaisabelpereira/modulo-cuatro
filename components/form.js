const postForm = () => {
  const formEl = document.querySelector(".form-contact__container");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = formEl.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const data = {
      to: "veronicaisabelpereira80@gmail.com",
      message: `Nombre: ${name}, Email: ${email}, Mensaje: ${message}.`,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((data) => data.json());

    formEl.reset();
  });
};

const formContactComponent = (el) => {
  const formContact = document.createElement("form");
  formContact.classList.add("form-contact__container");
  formContact.innerHTML = `
          <div class="form-contact__container__title">
              <h2>Escribime</h2>
          </div>
          <div class="form-contact__container__inputs">
              <div class="form-contact__container__inputs__input">
                  <label for="name">Nombre</label>
                  <input type="text" id="name" name="name">
              </div>
              <div class="form-contact__container__inputs__input">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email">
              </div>
              <div class="form-contact__container__inputs__input">
                  <label for="message">Mensaje</label>
                  <textarea id="message" name="message"></textarea>
              </div>
              <div class="form-contact__container__inputs__input">
                  <button type="submit">Enviar</button>
              </div>
          </div>
      `;

  el.appendChild(formContact);
  postForm();
};
