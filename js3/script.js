const clickButton = document.querySelector("button");
const texte = document.querySelector("span");

clickButton.addEventListener("click", () => {
  texte.innerHTML = "some texte ";
});
