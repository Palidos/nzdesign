const burgerButton = document.getElementById("burger");
const burgerCheckbox = document.getElementById("burger-checkbox");

burgerButton.addEventListener('click', () => {
  if (burgerCheckbox.checked) {
    burgerButton.style.position = "fixed";
    document.getElementById("sidebar").style.display = "flex";
  } else {
    burgerButton.style.position = "initial";
    document.getElementById("sidebar").style.display = "none";
  }
});