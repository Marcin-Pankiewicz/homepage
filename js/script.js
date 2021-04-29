console.log("Hello Developer :) Enjoy with doing mess on my page :)");

const hideShowImageButton = document.querySelector(".js-hideShowImageButton");
const hideShowTableButton = document.querySelector(".js-hideShowTableButton");
const hideShowContactButton = document.querySelector(".js-hideShowContactButton");
const image = document.querySelector(".js-section__image");
const musicTable = document.querySelector(".js-tableContainer");
const contact = document.querySelector(".js-contact")

hideShowImageButton.addEventListener("click", () => {
    image.classList.toggle("section__imageOff");
    hideShowImageButton.innerText = image.classList.contains("section__imageOff") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
});
hideShowTableButton.addEventListener("click", () => {
    musicTable.classList.toggle("tableOff");
    hideShowTableButton.innerText = musicTable.classList.contains("tableOff") ? "Pokaż tabelę" : "Ukryj tabelę";
});
hideShowContactButton.addEventListener("click", () => {
    contact.classList.toggle("section__contactOff");
    hideShowContactButton.innerText = contact.classList.contains("section__contactOff") ? "Pokaż kontakt" : "Ukryj kontakt";
});