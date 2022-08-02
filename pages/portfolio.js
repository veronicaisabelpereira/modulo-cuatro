const addCardTemplate = (params, id) => {
  const template = document.getElementById("card-template");
  const container = document.getElementById(`${id}`);
  const dataCard = params.items;
  dataCard.map((el, i) => {
    template.content.querySelector(".card__img").src =
      params.includes.Asset[i].fields.file.url;

    template.content.querySelector(".card_description__title").textContent =
      el.fields.title;

    template.content.querySelector(".card_description__detail").textContent =
      el.fields.description;

    template.content.querySelector(".card_description__link").href =
      el.fields.link;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  });
};

const getData = (type, id) => {
  fetch(
    `https://cdn.contentful.com/spaces/veas1edx61oy/environments/master/entries?access_token=bx7pogUKFebsxp3x2KM4807uU2e2GQB3mgtHKi9CBck&content_type=${type}`
  )
    .then((response) => response.json())
    .then((data) => addCardTemplate(data, id));
};

const addComponentPortfolio = () => {
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");

  headerComponent(headerContainer);
  footerComponent(footerContainer);
  getData("work", "card-portfolio");
};

addComponentPortfolio();
