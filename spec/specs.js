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

describe('Game', function() {
  it("creates a new game with the correct specifications", function(){
    var testGame= new Game();
    expect(testGame).to.include.keys('playerOne');
  });

  it("creates a new game with the correct specifications", function(){
    var testGame= new Game();
    expect(testGame).to.include.keys('playerTwo');
  });
  it("creates a new game with the correct specifications", function(){
    var testGame= new Game();
    expect(testGame).to.include.keys('board');
  });

});