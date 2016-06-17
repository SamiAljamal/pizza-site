// Business logic
function order(){
  this.MeatToppings = 0;
  this.veggieToppings = 0;
  this.pizzaSize = 0;
  this.price = 0;
}
//prototype to calculate the total price of toppings
order.prototype.toppingsPriceMeat = function(toppings){
  return this.meatToppings = 1 * toppings;
}

order.prototype.toppingsPriceVeggies = function(toppings){
  return this.veggieToppings = .25 * toppings;
}

//prototype to calculate price according to the size of the pizza.
order.prototype.sizePrice = function(pizzaSize){
  if(pizzaSize === 1){
    this.pizzaSize = 5;
  } else if (pizzaSize === 2) {
    this.pizzaSize = 7;
  } else if (pizzaSize === 3){
      this.pizzaSize = 9;
  }
   else{
    this.pizzaSize = 11;
  }
  return this.pizzaSize;
}
 order.prototype.totalPrice = function(meatToppings,veggieToppings,size){
   return this.price = meatToppings + veggieToppings + size;
 }
// front-end logic
$(document).ready(function(){
  var totalOrder;
  var toppingArray;
  $("form#order").submit(function(event){
    event.preventDefault();
    //get topping values for veggies
    var inputToppingVeggies= 0;
    var toppingArrayVeggies = []
    $('.chcbox1:checked').each(function(){
      inputToppingVeggies += 1;
    });
    $('.chcbox1:checked').each(function () {
      toppingArrayVeggies.push($(this).val());
    });
    //get toppings value for meat
    var inputToppingMeat = 0;
    var toppingArrayMeat=[];
    $('.chcbox:checked').each(function () {
      inputToppingMeat += 1;
    });
    $('.chcbox:checked').each(function () {
      toppingArrayMeat.push($(this).val());
    });
    var toppingsArray=[]
    toppingsArray.push(toppingArrayVeggies);
    toppingsArray.push(toppingArrayMeat);
    alert(toppingsArray);
    var inputSize = parseInt($("#size").val());
    var totalOrder= new order();
    var toppingPriceMeat = totalOrder.toppingsPriceMeat(inputToppingMeat);
    var toppingPriceVeggie = totalOrder.toppingsPriceVeggies(inputToppingVeggies);
    var pizzaSizePrice = totalOrder.sizePrice(inputSize);
    var totalPrice = totalOrder.totalPrice(toppingPriceMeat,toppingPriceVeggie,pizzaSizePrice);
    alert(totalPrice);
    $(".toppings").text(toppingsArray);
    $(".price").text(totalPrice);
    $("#myModal").modal("show");


  });
});
