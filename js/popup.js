var link = document.querySelector(".contact");
var popup = document.querySelector(".modal-write-message");
var close = document.querySelector(".modal-close");
var name = popup.querySelector("[name=name]");
var linkMap = document.querySelector(".map-small");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-close-map");
var buyProduct = document.querySelector(".buy");
var busket = document.querySelector(".item-in-busket");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
}); 

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
}); 

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

buyProduct.addEventListener("click", function (evt) {
  evt.preventDefault();
  busket.classList.add("modal-show");
}); 

