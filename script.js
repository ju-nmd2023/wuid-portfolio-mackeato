const bigButton = document.getElementById("big-button");
const bodyElement = document.querySelector("body");
const disappearButton = document.getElementById("disappearButton");

bigButton.addEventListener("click", function () {
    bodyElement.style.backgroundColor = "#ffffff";
});

function hideButton() {
    disappearButton.style.display = "none";
}

disappearButton.addEventListener("click", hideButton);