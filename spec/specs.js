describe('Drink', function() {
  it("creates a new drink with the given specifications", function(){
    var testDrink = new Drink("coke", "tall","liz", "rum", "lime", "coconut");
    expect(testDrink.base).to.equal("coke");
    expect(testDrink.size).to.equal("tall");
    expect(testDrink.name).to.equal("liz");
    expect(testDrink.booze).to.equal("rum");
    expect(testDrink.fruit).to.equal("lime");
    expect(testDrink.syrup).to.equal("coconut");
  });

  it("returns correct price for tall drink with the tomato or juice base", function(){
    var testDrink = new Drink("tomato-juice", "tall","todd", "rum", "lime", "grenidine");
    expect(testDrink.base).to.equal("tomato-juice");
    expect(testDrink.size).to.equal("tall");
    expect(testDrink.name).to.equal("todd");
    expect(testDrink.booze).to.equal("rum");
    expect(testDrink.fruit).to.equal("lime");
    expect(testDrink.syrup).to.equal("grenidine");
    expect(testDrink.price(1)).to.equal(10);
  });

  it("returns correct price for tall drink with the club soda or coke base", function(){
    var testDrink = new Drink("coke", "tall","jake", "gin", "olive", "coconut");
    expect(testDrink.base).to.equal("coke");
    expect(testDrink.size).to.equal("tall");
    expect(testDrink.name).to.equal("jake");
    expect(testDrink.booze).to.equal("gin");
    expect(testDrink.fruit).to.equal("olive");
    expect(testDrink.syrup).to.equal("coconut");
    expect(testDrink.price(1)).to.equal(11);
  });

  it("returns correct price for short drink with the club soda or coke base", function(){
    var testDrink = new Drink("coke", "short","jerry", "gin", "orange", "coconut");
    expect(testDrink.price(1)).to.equal(9);
  });

  it("returns correct price for short drink with the tomato or juice base", function(){
    var testDrink = new Drink("tomato-juice", "short","tim", "rum", "lime", "coconut");
    expect(testDrink.price(1)).to.equal(8);
  });

  it("returns correct price for multiple short drinks with the tomato or juice base", function(){
    var testDrink = new Drink("tomato-juice", "short","bob", "vodka", "lime", "spicy");
    expect(testDrink.price(3)).to.equal(27);
  });

  it("returns correct price for multiple tall drinks with the coke or club soda", function(){
    var testDrink = new Drink("club-soda", "tall","bob", "tequila", "cherry", "triple-sec");
    expect(testDrink.price(15)).to.equal(165);
  });

});
