describe('Board', function() {
  it("creates a new board with the given specifications", function(){
    var testBoard= new Board();
    expect(testBoard.board).to.eql([[null,null,null],[null,null,null],[null,null,null]]);
  });

  it("will mark a square on the board", function(){
    var testBoard= new Board();
    testBoard.mark(1,1,"X");
    expect(testBoard.isMarkedYet(1,1)).to.equal("X");
  });

  it("will return the mark that is on the board", function(){
    var testBoard= new Board();
    testBoard.mark(1,1,"O");
    expect(testBoard.isMarkedYet(1,1)).to.equal("O");
  });

  it("will report false if a square is not marked", function(){
    var testBoard= new Board();
    testBoard.mark(1,2,"O");
    expect(testBoard.isMarkedYet(1,1)).to.equal(false);
  });

  
});

describe('Player', function() {
  it("creates a new player with the given specifications", function(){
    var testPlayer= new Player("X", true);
    expect(testPlayer.marker).to.equal("X");
    expect(testPlayer.isActive).to.equal(true);
  });

  it("creates a new player with the given specifications", function(){
    var testPlayer= new Player("O", false);
    expect(testPlayer.marker).to.equal("O");
    expect(testPlayer.isActive).to.equal(false);
  });

  it("will change a players turn", function() {
    var testPlayer1 = new Player("X", true);
    var testPlayer2 = new Player("O", false);
    testPlayer1.changeTurns();
    testPlayer2.changeTurns();
    expect(testPlayer1.isActive).to.equal(false);
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

  it("toggles whose turn it is in a game", function(){
    var testGame= new Game();
    testGame.toggleTurns();
    expect(testGame.playerOne.isActive).to.equal(false);
    expect(testGame.playerTwo.isActive).to.equal(true);
  });

  it("returns whose turn it is in a game", function(){
    var testGame= new Game();
    testGame.getTurns();
    expect(testGame.playerOne.isActive).to.equal(true);
    expect(testGame.playerTwo.isActive).to.equal(false);
  });







});