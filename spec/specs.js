describe('Drink', function() {
  it("creates a new drink with the given specifications", function(){
    var testDrink = new Drink("coke", "tall","rumncoke", "rum", "lime", "coconut");
    expect(testDrink.base).to.equal("coke");
    expect(testDrink.size).to.equal("tall");
    expect(testDrink.name).to.equal("rumncoke");
    expect(testDrink.booze).to.equal("rum");
    expect(testDrink.fruit).to.equal("lime");
    expect(testDrink.syrup).to.equal("coconut");
  });

  it("returns correct price for tall drink with the tomato or juice base", function(){
    var testDrink = new Drink("tomato-juice", "tall","rumncoke", "rum", "lime", "coconut");
    expect(testDrink.base).to.equal("tomato-juice");
    expect(testDrink.size).to.equal("tall");
    expect(testDrink.name).to.equal("rumncoke");
    expect(testDrink.booze).to.equal("rum");
    expect(testDrink.fruit).to.equal("lime");
    expect(testDrink.syrup).to.equal("coconut");
    expect(testDrink.price(1)).to.equal(10);
  });

  it("returns correct price for tall drink with the club soda or coke base", function(){
    var testDrink = new Drink("coke", "tall","rumncoke", "gin", "olive", "coconut");
    expect(testDrink.base).to.equal("coke");
    expect(testDrink.size).to.equal("tall");
    expect(testDrink.name).to.equal("rumncoke");
    expect(testDrink.booze).to.equal("gin");
    expect(testDrink.fruit).to.equal("olive");
    expect(testDrink.syrup).to.equal("coconut");
    expect(testDrink.price(1)).to.equal(11);
  });


});
