// Business logic
function order(){
  this.toppings = 0;
  this.pizzaSize = 0;
  this.price = 0;
}
order.prototype.toppingsPrice = function(toppings){
  return this.toppings = 1.50 * toppings;

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
  });
});
