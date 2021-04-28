console.log("Hello Developer :) Enjoy with doing mess on my page :)");

let hideShowImageButton = document.querySelector(".hideShowImageButton");
let hideMusicTableButton = document.querySelector(".hideMusicTableButton");
let image = document.querySelector(".image");
let imageOff = document.querySelector(".imageOff");
let musicTable = document.querySelector(".musicTable");

hideShowImageButton.addEventListener("click", () => {
    if (hideShowImageButton.innerText === "Pokaż zdjęcie") {
        hideShowImageButton.innerText = "Ukryj zdjęcie";
    }
    else {
        hideShowImageButton.innerText = "Pokaż zdjęcie";
    }
    image.classList.toggle("imageOff");
});

hideMusicTableButton.addEventListener("click", () => {
    if (hideMusicTableButton.innerText === "Ukryj tabelę") {
        hideMusicTableButton.innerText = "Pokaż tabelę";
    }
    else {
        hideMusicTableButton.innerText = "Ukryj tabelę";
    }
    musicTable.classList.toggle("tableOff");
});
