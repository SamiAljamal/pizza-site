function order(meatToppings,veggieToppings,pizzaSize){
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.pizzaSize = pizzaSize;
};
order.prototype.price = function(){
  if(this.pizzaSize === 1){
  sizePrice= 5;
  } else if (this.pizzaSize === 2) {
    sizePrice = 7;
  } else if (this.pizzaSize === 3){
      sizePrice = 9;
  }
   else{
    sizePrice= 11;
  }
  return (this.meatToppings.length * 1) + (this.veggieToppings.length * .25) + sizePrice;
};

// front-end logic
$(document).ready(function(){
  var totalOrder;
  var toppingArray;
  $("form#order").submit(function(event){
    event.preventDefault();
    //get topping values for veggies
    var veggieToppings = []
    $('.chcbox1:checked').each(function () {
    veggieToppings.push($(this).val());
    });
    //get toppings value for meat

    var meatToppings=[];
    $('.chcbox:checked').each(function () {
      meatToppings.push($(this).val());
    });
    // create array that pushes all selected topping into it
    var toppingsArray=[]
    toppingsArray.push(veggieToppings);
    toppingsArray.push(meatToppings);

    var pizzaSize = parseInt($("#size").val());

    var customerOrder= new order(meatToppings,veggieToppings,pizzaSize);

    $(".toppings").text(toppingsArray);
    $(".price").text(customerOrder.price());
    $("#myModal").modal("show");
  });
});
