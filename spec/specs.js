describe('Board', function() {
  it("creates a new board with the given specifications", function(){
    var testBoard= new Board();
    expect(testBoard.board).to.eql([[null,null,null],[null,null,null],[null,null,null]]);
  });

  
});

describe('Player', function() {
  it("creates a new player with the given specifications", function(){
    var testPlayer= new Player("X", true);
    expect(testPlayer.marker).to.equal("X");
  });

  it("creates a new player with the given specifications", function(){
    var testPlayer= new Player("O", true);
    expect(testPlayer.marker).to.equal("O");
  });

  it("creates a new player with the given specifications", function(){
    var testPlayer= new Player("O", true);
    expect(testPlayer.isActive).to.equal(true);
  });

  it("creates a new player with the given specifications", function(){
    var testPlayer= new Player("O", false);
    expect(testPlayer.isActive).to.equal(false);
  });

  
});