{
    const hideShowTableButton = document.querySelector(".js-hideShowTableButton");
    const hideShowContactButton = document.querySelector(".js-hideShowContactButton");
    const hideShowImageButton = document.querySelector(".js-hideShowImageButton");

    const onClickHideShowImage = () => {
        const image = document.querySelector(".js-section__image");
        image.classList.toggle("section__imageOff");
        hideShowImageButton.innerText = image.classList.contains("section__imageOff") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
    };
    const onClickHideShowTable = () => {
        const musicTable = document.querySelector(".js-tableContainer");
        musicTable.classList.toggle("tableOff");
        hideShowTableButton.innerText = musicTable.classList.contains("tableOff") ? "Pokaż tabelę" : "Ukryj tabelę";
    };
    const onClickHideShowContact = () => {

        const contact = document.querySelector(".js-contact");
        contact.classList.toggle("section__contactOff");
        hideShowContactButton.innerText = contact.classList.contains("section__contactOff") ? "Pokaż kontakt" : "Ukryj kontakt";
    };

    const init = () => {
        console.log("Hello Developer :) Enjoy with doing mess on my page :)");

        hideShowImageButton.addEventListener("click", onClickHideShowImage);

        hideShowTableButton.addEventListener("click", onClickHideShowTable);

        hideShowContactButton.addEventListener("click", onClickHideShowContact);
    }
    init();
}