const addComponents = () => {
  const header = document.querySelector(".header");
  const contact = document.querySelector(".contact");
  const footerContainer = document.getElementById("footer-container");

  headerComponent(header);
  formContactComponent(contact);
  footerComponent(footerContainer);
};

addComponents();
