let btnGetConsultation = document.querySelector(".btnGetConsultation");
let divForWindow = document.querySelector(".divForWindow");

let inputSubmit = document.querySelector(".inputSubmit");

let blockForForm = document.querySelector(".blockForForm");
let blockSuccess = document.querySelector(".blockSuccess");

let blockForTopHeader = document.querySelector(".blockForTopHeader");
let blockForTopHeaderEmpty = document.querySelector(".blockForTopHeaderEmpty");
btnGetConsultation.addEventListener("click", (event) => {
    divForWindow.style.display = "flex";
});

inputSubmit.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    blockForForm.style.display = "none";
    blockSuccess.style.display = "flex";
})

document.addEventListener("scroll", () => {
    blockForTopHeader.style.backgroundColor = "#E18240";
    blockForTopHeaderEmpty.style.display = "block";
})
