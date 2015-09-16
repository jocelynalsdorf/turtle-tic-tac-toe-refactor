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

  // it("returns correct price for drink with the given specifications", function(){
  //   var testDrink = new Drink("coke", "tall","rumncoke", "rum", "lime", "coconut");
  //   expect(testDrink.base).to.equal("coke");
  //   expect(testDrink.size).to.equal("tall");
  //   expect(testDrink.name).to.equal("rumncoke");
  //   expect(testDrink.booze).to.equal("rum");
  //   expect(testDrink.fruit).to.equal("lime");
  //   expect(testDrink.syrup).to.equal("coconut");
  // });


});
