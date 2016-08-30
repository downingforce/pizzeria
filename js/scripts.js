//Back-end Logic (BDD)

function Orders (pieSize, ingredients, quantity) {
  this.pieSize = pieSize;
  this.ingredients = ingredients;
  this.quantity = quantity;
  this.total = 0;
};

var menu = {
  small: 7.99,
  medium: 8.99,
  large: 9.99,
  pepperoni: 2.99,
  sausage: 2.99,
  basil: 1.99,
  mushrooms: 1.99
};

Orders.prototype.price = function (size, ingredient, quantity) {
  var totalPrice = 0;
  if (size === "Small") {
    totalPrice += menu.small;
  } else if (size === "Medium") {
    totalPrice += menu.medium;
  } else if (size === "Large") {
    totalPrice += menu.large;
  }

  if (ingredient === "Pepperoni") {
    totalPrice += menu.pepperoni;
  } else if (ingredient === "Sausage") {
    totalPrice += menu.sausage;
  } else if (ingredient === "Basil") {
    totalPrice += menu.basil;
  } else if (ingredient === "Mushrooms") {
    totalPrice += menu.mushrooms;
  };
  totalPrice *= quantity;
  this.total = totalPrice;
};

// User Interface (font-end) Logic

$(document).ready(function() {

  $("#order_preview").hide();

  $("#order_init").click(function(event) {

    var userSize = $("#size option:selected").val();
    var userQty = $("#quantity option:selected").val();
    var ingredient = $("#ingredients option:selected").val();

    var daOrder = new Orders (userSize, ingredient, userQty);

    daOrder.price(userSize, ingredient, userQty);

    console.log(userSize);

    $("#selected_size").append(daOrder.pieSize);
    $("#selected_ingredients").append(daOrder.ingredients);
    $("#selected_qty").append(daOrder.quantity);
    $("#order_total").append(daOrder.total);

    $("#order_preview").show();

    event.preventDefault();

  });
});
