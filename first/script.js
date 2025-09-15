const continueReading = document.createElement("a");
const allParagraphs = document.querySelectorAll("p");

continueReading.setAttribute("href", "#");
continueReading.setAttribute("class", "alink");
continueReading.innerHTML = "For continue reading";

allParagraphs[0].appendChild(continueReading);

function hideText() {
  for (let i = 0; i < allParagraphs.length; i++) {
    if (i === 0) {
      continue;
    } else if (i >= 1) {
      allParagraphs[i].style.display = "none";
    }
  }
}
hideText();

function showText() {
  for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].style.display = "block";
  }
  this.remove();
}

continueReading.addEventListener("click", showText);
