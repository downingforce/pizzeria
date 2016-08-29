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

Orders.prototype.price = function (size, ingredients, quantity) {
  var totalPrice = 0;
  if (size === "small") {
    totalPrice += menu.small;
  } else if (size === "medium") {
    totalPrice += menu.medium;
  } else if (size === "large") {
    totalPrice += menu.large;
  };
  for (i = 0; i < this.ingredients.length; i++) {
    total += this.ingredients[i];
  };
  totalPrice *= quantity;
  this.total = totalPrice;
};


// User Interface (font-end) Logic


$(document).ready(function() {
  $("div#quantity").submit(function(event) {

    $("#order_preview").hide();

    var userSize = $("input[name=size]:checked").val();
    var userQty = $("#quantity option:selected").val();

    var customerIngredients = [];
    var totalIngredients = 4;

    var ingredient1 = $("input[name=pepperoni]:checked").val();
    var ingredient2 = $("input[name=sausage]:checked").val();
    var ingredient3 = $("input[name=basil]:checked").val();
    var ingredient4 = $("input[name=mushrooms]:checked").val();

    for (var i = 0; i < totalIngredients; i++) {
      if (document.getElementById(pepperoni).checked) {
          customerIngredients.push(menu.pepperoni);
      } else if (document.getElementById(sausage).checked) {
          customerIngredients.push(menu.sausage);
      } else if (document.getElementById(basil).checked) {
          customerIngredients.push(menu.basil);
      } else if (document.getElementById(mushrooms).checked) {
          customerIngredients.push(menu.mushrooms);
      }
    };

    var daOrder = new Orders (userSize, customerIngredients, userQty);

    $("#selected_size").text(daOrder.pieSize);
    $("#selected_ingredients").text();
    $("#selected_qty").text(daOrder.quantity);
    $("#order_total").text(daOrder.total);

    $("#order_preview").show();

    event.preventDefault();

  });
});
