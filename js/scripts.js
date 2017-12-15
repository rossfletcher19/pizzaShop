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

// user interface
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    var selectedSize = parseInt($("#size").val());
    var selectedTopping = parseInt($("#topping").val());
    var selectedDrink = parseInt($("#drink").val());
    var inputName = $("#name").val();
    var inputPhone = $("#phone").val();

    var newOrder = new Pizza (selectedSize, selectedTopping, selectedDrink);
    var newCust = new Cust (inputName, inputPhone);

    $("#orderAmt").text(newOrder.order());
    $("#thankYou").text(newCust.custInfo());
    $("#showOrder").fadeIn();
    $("#placeOrder").hide();

  })

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
