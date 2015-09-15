describe('replacer', function() {
  it("returns a string", function() {
    expect(replacer("bob is great", "bob", "Sam")).to.be.a("string");
  });

  it("replaces one word ", function() {
    expect(replacer("bob", "bob", "Sam")).to.equal("Sam");
  });

  it("matches words regardless of case", function() {
    expect(replacer("bob is great", "Bob", "Sam")).to.equal("Sam is great");
  });

  it("matches words occuring anywhere regardless of spacing", function() {
    expect(replacer("bob is bobgreat", "Bob", "Sam")).to.equal("Sam is Samgreat");
  });

  it("returns false if user doesn't enter a word to find", function() {
    expect(replacer("Sam is Samgreat", "", "bob")).to.equal(false);
  });

  it("returns false if user doesn't enter a sentence to find", function() {
    expect(replacer("", "sam", "bob")).to.equal(false);
  });

  it("returns false if user doesn't enter a replacement to find", function() {
    expect(replacer("blah sam", "sam", "")).to.equal(false);
  });

});

