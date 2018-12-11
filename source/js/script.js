var products = document.querySelectorAll(".product");
var cards = document.querySelectorAll(".product__card");
var buttons = document.querySelectorAll(".product__button");

var selectProduct = function (product, card, button) {
  card.addEventListener("click", function () {
    card.focus();
    if ((product.classList.contains("product--disabled")) === false) {
      product.classList.toggle("product--selected");
    }
  });

  card.addEventListener("keypress", function (evt) {
    if (evt.key  === "Enter") {
      card.focus();
      if ((product.classList.contains("product--disabled")) === false) {
        product.classList.toggle("product--selected");
      }
    }
  });

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    card.focus();
    product.classList.add("product--selected");
  });
};

for (var i = 0; i < products.length; i++) {
  selectProduct (products[i], cards[i], buttons[i]);
}
