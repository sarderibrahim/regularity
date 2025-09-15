const selectButton = document.querySelector("button");
// selectButton.addEventListener("click", () => {
//   alert("hello from arrow function");
// });

selectButton.addEventListener("click", function () {
  alert("hello from named function");
});
