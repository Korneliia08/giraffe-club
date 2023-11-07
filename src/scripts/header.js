let btnGetConsultation = document.querySelector(".btnGetConsultation");
let divForWindow = document.querySelector(".divForWindow");

let inputSubmit = document.querySelector(".inputSubmit");

let blockForForm = document.querySelector(".blockForForm");
let blockSuccess = document.querySelector(".blockSuccess");
const close = document.querySelector(".close");
const whiteSmallBlock = document.querySelector(".whiteSmallBlock")

let blockForTopHeader = document.querySelector(".blockForTopHeader");
let blockForTopHeaderEmpty = document.querySelector(".blockForTopHeaderEmpty");
const form = whiteSmallBlock.querySelector('form')

btnGetConsultation.addEventListener("click", (event) => {
    divForWindow.style.display = "flex";
    blockForForm.style.display = "block";
    blockSuccess.style.display = "none";

    form.elements.name.value = ''
    form.elements.number.value = ''
    form.elements.name.className = ''
    form.elements.number.className = ''
});

divForWindow.addEventListener('click', (event) => {
    if (event.target.className === "divForWindow") {
        whiteSmallBlock.style.scale = '1.05'
    }
    setTimeout(() => {
        whiteSmallBlock.style.scale = '1'
    }, 200)
})
inputSubmit.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();


    form.elements.name.classList.add('inputReq')
    form.elements.number.classList.add('inputReq')
    if (form.checkValidity()) {


        blockForForm.style.display = "none";
        blockSuccess.style.display = "flex";
    }
})
close.addEventListener("click", () => {
    divForWindow.style.display = "none";


})


document.addEventListener("scroll", (event) => {
    if (window.scrollY == 0) {
        blockForTopHeader.style.backgroundColor = "transparent";
        blockForTopHeaderEmpty.style.display = "block";
    } else {
        blockForTopHeader.style.backgroundColor = "#E18240";
        blockForTopHeaderEmpty.style.display = "block";
    }

})
