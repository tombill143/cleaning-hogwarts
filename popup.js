const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popupContainer = document.querySelector(".popup");

openPopupButton.addEventListener("click", function () {
  popupContainer.style.display = "flex";
});

closePopupButton.addEventListener("click", function () {
  popupContainer.style.display = "none";
});
