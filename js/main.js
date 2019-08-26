// For photo only
const photoButton = document.querySelector(".photoonlybtn");
const photoArea = document.querySelector(".photoonlyoptions");
// For film only
const filmButton = document.querySelector(".filmonlybtn");
const filmArea = document.querySelector(".filmonlyoptions");
// For combo
const comboButton = document.querySelector(".combobtn");
const comboArea = document.querySelector(".combooptions");


// For photo only
photoButton.addEventListener("click", () => {
    photoArea.classList.toggle("show");
});
// For film only
filmButton.addEventListener("click", () => {
    filmArea.classList.toggle("show");
});
// For combo
comboButton.addEventListener("click", () => {
    comboArea.classList.toggle("show");
});
