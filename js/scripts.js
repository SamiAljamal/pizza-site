// Business logic
function order(){
  this.toppings = 0;
  this.pizzaSize = 0;
  this.price = 0;
}

$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    //get toppings value
    var inputTopping = 0;
    $('input[type=checkbox]').each(function () {
    this.checked ? inputTopping += 1 : inputTopping += 0;
  });ß
    var inputSize = parseInt($("#size").val());

  });

});
