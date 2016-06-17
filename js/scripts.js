// Business logic
function order(){
  this.toppings = 0;
  this.pizzaSize = 0;
  this.price = 0;
}
//prototype to calculate the total price of toppings
order.prototype.toppingsPrice = function(toppings){
  return this.toppings = 1.50 * toppings;
}

//prototype to calculate price according to the size of the pizza.
order.prototype.sizePrice = function(pizzaSize){
  if(pizzaSize === 1){
    this.pizzaSize = 8;
  } else if (pizzaSize === 2) {
    this.pizzaSize = 10;
  } else {
    this.pissaSize = 12;
  }
  return this.pizzaSize;

}

$(document).ready(function(){
  var totalOrder;
  $("form#order").submit(function(event){
    event.preventDefault();
    //get toppings value
    var inputTopping = 0;
    $('input[type=checkbox]').each(function () {
    this.checked ? inputTopping += 1 : inputTopping += 0;
  });
    alert(inputTopping);
    var inputSize = parseInt($("#size").val());
    var totalOrder= new order();
    var toppingPrice = totalOrder.toppingsPrice(inputTopping);
    alert(toppingPrice);
    var pizzaSizePrice = totalOrder.sizePrice(inputSize);
    alert (pizzaSizePrice);
  });
});
