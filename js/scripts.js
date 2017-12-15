// business logic

function Pizza(size, topping, beverage) {
  this.size = size;
  this.topping = topping;
  this.beverage = beverage;
}

function Cust(name, phone) {
  this.name = name;
  this.phone = phone;
}

Pizza.prototype.order = function() {
  return this.size + this.topping + this.beverage;
}

Cust.prototype.custInfo = function () {
  return "Hey " + this.name + "! We have recieved your order. We'll call you at " + this.phone + " if we need to get a hold of you and your order should be ready within 30 minutes;";
};

function clearOrder() {
  $("select#size").val("");
  $("select#topping").val("");
  $("select#drink").val("");
  $("input#name").val("");
  $("input#phone").val("");
}

// user interface
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    var selectedSize = parseInt($("#size").val());
    var selectedTopping = parseInt($("#topping").val());
    var selectedDrink = parseFloat($("#drink").val());
    var inputName = $("#name").val();
    var inputPhone = $("#phone").val();

    var newOrder = new Pizza (selectedSize, selectedTopping, selectedDrink);
    var newCust = new Cust (inputName, inputPhone);

    $("#orderAmt").text(newOrder.order());
    $("#thankYou").text(newCust.custInfo());
    $("#showOrder").fadeIn();
    $("#placeOrder").hide();

    clearOrder();

  })

  // $("#add-pie").click(function() {
  //   $("#orderForm").append('<label for="size" class="choiceLabel">Select your additional pizza size:</label>' +
  //                           '<select class="form-control" id="size" required>' +
  //                             '<option value="">Select Size</option>' +
  //                             '<option value="5">Personal/Mini</option>' +
  //                             '<option value="8">Small</option>' +
  //                             '<option value="12">Medium</option>' +
  //                             '<option value="18">Large</option>' +
  //                             '<option value="25">Party</option>' +
  //                           '</select>' +
  //                           '<label for="topping" class="choiceLabel">Select your Combo</label>' +
  //                           '<select class="form-control" id="topping" required>' +
  //                             '<option value="">Select Combo</option>' +
  //                             '<option value="17">Margarita</option>' +
  //                             '<option value="13">Veggie</option>' +
  //                             '<option value="13">Hawaiian</option>' +
  //                             '<option value="10">Pepperoni</option>' +
  //                             '<option value="15">Meat Lovers</option>' +
  //                             '<option value="14">Supreme</option>' +
  //                           '</select>' +
  //                           '<label for="drink" class="choiceLabel">Select your drink:</label>' +
  //                           '<select class="form-control" id="drink" required>' +
  //                             '<option value="">Select Drink</option>' +
  //                             '<option value="">None</option>' +
  //                             '<option value="2.50">Soda Pop - Regular</option>' +
  //                             '<option value="3.50">Soda Pop - Large</option>' +
  //                             '<option value="5.00">Beer - Pint</option>' +
  //                             '<option value="12.00">Beer - Pitcher</option>' +
  //                             '<option value="2.00">Juice Box</option>' +
  //                             '<option value="2.00">Milk Carton</option>' +
  //                           '</select>');
  // });

  $("#homeB").click(function(event) {
      $("#home").fadeIn();
      $("#menu").hide();
      $("#placeOrder").hide();
      $("#showOrder").hide();
      $("#contact").hide();

  })

  $("#menuB").click(function(event) {
      $("#menu").fadeIn();
      $("#home").hide();
      $("#placeOrder").hide();
      $("#showOrder").hide();
      $("#contact").hide();
  })

  $("#orderB").click(function(event) {
      $("#placeOrder").fadeIn();
      $("#menu").hide();
      $("#home").hide();
      $("#showOrder").hide();
      $("#contact").hide();
  })

  $("#contactB").click(function(event) {
      $("#contact").fadeIn();
      $("#placeOrder").hide();
      $("#menu").hide();
      $("#home").hide();
      $("#showOrder").hide();
  })

  $("#goToOrder").click(function(event) {
      $("#placeOrder").fadeIn();
      $("#contact").hide();
      $("#menu").hide();
      $("#home").hide();
      $("#showOrder").hide();
  })
})
