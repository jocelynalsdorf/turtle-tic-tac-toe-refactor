function Drink(base, size) {
  this.base = base;
  this.size = size;
  this.mixins = [];
}

Drink.prototype.price = function(){
  
}

function Mixin(itemOne, itemTwo, itemThree) {
  this.itemOne = itemOne;
  this.itemTwo = itemTwo;
  this.itemThree = itemThree;
}

Mixin.prototype.addons = function(){
  
}


var resetFields = function(){
  $("input#how-many").val("");
  $("input#drink-name").val("");
  };

$(document).ready(function(){


$("form#new-drink").submit(function(event){
  event.preventDefault();

  var baseType = $('input[name="base-type"]:checked').val();
  var drinkSize = $('input[name="drink-size"]:checked').val(); 
  var howManyDrinks = parseInt($("input#how-many").val());
  var inputtedDrinkName = $("input#drink-name").val();
  var boozeType = $('input[name="booze-type"]:checked').val();   
  var fruitType = $('input[name="fruit-type"]:checked').val(); 
  var syrupType = $('input[name="syrup-type"]:checked').val(); 

  console.log(drinkSize);

//     var newContact = new Contact(inputtedFirstName, inputtedLastName);

//     $(".new-address").each(function() {
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedState = $(this).find("input.new-state").val();

//       var newAddress = new Address(inputtedStreet,inputtedCity, inputtedState);
//       newContact.addresses.push(newAddress);
//      });

//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");



//     $(".contact").last().click(function() {
//     $("#show-contact").show();
//     $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
//     $(".first-name").text(newContact.firstName);
//     $(".last-name").text(newContact.lastName);

//     $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address){
//         $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//       });

//     $("ul#addresses").text(newContact.address);
//     });

//     resetFields();

  });//end of submit event
});//end of file