/*addCardTemplate agrega template al DOM y asigna contenido.
Recibe 2 parametros:  
params que es un objeto y un ID que sera el del elemento que lo contendra.
Esta funcion se ejecutara dentro de otra funcion: getData.
getData ser la encargada de
*/

const addCardTemplate = (params, id) => {
  const template = document.getElementById("card-template");
  const container = document.getElementById(`${id}`);
  /* Toma al objeto para asignar contenido a las diferentes partes del template */
  const dataCard = params.items;
  dataCard.map((el, i) => {
    template.content.querySelector(".card__img").src =
      params.includes.Asset[i].fields.file.url;

    template.content.querySelector(".card_description__title").textContent =
      el.fields.title;

    template.content.querySelector(".card_description__detail").textContent =
      el.fields.description;

    template.content.querySelector(".card_description__link").href =
      el.fields.url;
    /*Una vez asignado el contenido se hace clone e importa para luego
     realizar un appendchild del mismo para agregarlo al DOM*/
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  });
};
/*getData consume contenido de contenful y usa esta como params para ejecutar la funcion addCardTemplate*/
const getData = (type, id) => {
  fetch(
    `https://cdn.contentful.com/spaces/veas1edx61oy/environments/master/entries?access_token=bx7pogUKFebsxp3x2KM4807uU2e2GQB3mgtHKi9CBck&content_type=${type}`
  )
    .then((response) => response.json())
    .then((data) => addCardTemplate(data, id));
};
/* En la funcion main se ejecutaran las funciones que imporantan componentes y las que agregan contenido 
previamente se seleccionaran los elementos del DOM donde se cargara el contenido*/
const main = () => {
  /**seleccion de elementos */
  const headerContainer = document.getElementById("header-container");
  const formContact = document.getElementById("form-contact");
  const footerContainer = document.getElementById("footer-container");
  /*const welcomeContainer = document.getElementById("welcome-container");*/
  /**Ejecucion de funciones para traer componentes */
  headerComponent(headerContainer);
  formContactComponent(formContact);
  footerComponent(footerContainer);
  /**Ejecucion de funciones para traer contenido de contenful */
  /* getData("bienvenida", "my-presentation");*/
  getData("presentation", "my-presentation");
  getData("service", "my-services");
};
/**Ejecucion de la funcion main */
main();
