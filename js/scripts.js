//Back-end Logic

function Order (name, size, ingredients, quantity) {
  this.name = name;
  this.size = size;
  this.ingredients = [];
  this.quantity = quantity;
};

Order.prototype.sizeCost = function() {
  if (this.size === "Small"){
    return 7.99;
  } else if (this.size === "Medium") {
    return 8.99;
  } else if (this.size === "Large") {
    return 9.99;
  }
}

Order.prototype.totalCost = function() {
  var totalPrice = sizeCost + this.ingredients;
  return totalPrice;
}

//User Interface Logic

$(document).ready(function() {
  $(".button alt").click(function() {

    var name = $("input#name").val();
    var size = $("input:radio[#size""]:checked").val();
    var totIngredients = $("#ingredients:checked").each(function()  {
        ingredientArray[ingredients++] = parseInt($(this).val());
      });
    var quantity = $("input#quantity").val();

    var customerOrder = new Order (name, size, totIngredients, quantity);

    var billTotal = customerOrder.sizeCost.totalCost;

    console.log(billTotal);

    event.preventDefault();
  });

});
