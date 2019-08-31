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
    if (photoArea.style.display = "flex") {
        filmArea.style.display = "none";
        comboArea.style.display = "none";
    } else {
        filmArea.style.display = "flex";
        comboArea.style.display = "flex";
    };
});
// For film only
filmButton.addEventListener("click", () => {
    filmArea.classList.toggle("show");
    if (filmArea.style.display = "flex") {
        photoArea.style.display = "none";
        comboArea.style.display = "none";
    } else {
        photoArea.style.display = "flex";
        comboArea.style.display = "flex";
    };
});
// For combo
comboButton.addEventListener("click", () => {
    comboArea.classList.toggle("show");
    if (comboArea.style.display = "flex") {
        photoArea.style.display = "none";
        filmArea.style.display = "none";
    } else {
        photoArea.style.display = "flex";
        filmArea.style.display = "flex";
    };


});

// Page: Portfolio
