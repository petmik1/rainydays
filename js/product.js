const btn = document.querySelector(".btn_addToCart");
const hiddenBox = document.querySelector(".hiddenInfo");

btn.addEventListener("click", displayBox);

function displayBox() {
    hiddenBox.style.display = "flex";
}