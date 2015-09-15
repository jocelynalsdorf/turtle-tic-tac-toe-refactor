describe('Contact', function() {
  it("creates a new contact with the given specifications", function(){
    var testContact = new Contact("rita", "moreno");
    expect(testContact.firstName).to.equal("rita");
    expect(testContact.lastName).to.equal("moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("creates a full name on a contact ", function(){
    var testContact = new Contact("rita", "moreno");
    expect(testContact.fullName()).to.equal("rita moreno");
  }); 

});

describe('Address', function(){
  it("creates anew address with the given specifications", function(){
    var testAddress = new Address("123street","clovis", "ca");
    expect(testAddress.street).to.equal("123street");
    expect(testAddress.city).to.equal("clovis");
    expect(testAddress.state).to.equal("ca");
  });

  it("adds the full address on an address", function(){
    var testAddress = new Address("123street","clovis", "ca");
    expect(testAddress.fullAddress()).to.equal("123street, clovis, ca");
  });
});
