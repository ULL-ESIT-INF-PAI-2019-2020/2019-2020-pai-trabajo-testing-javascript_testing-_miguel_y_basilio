const chai = require("chai");
const expect = chai.expect;

const eigthQueen = require("../src/eight_queens.js");
const isSafeQueenTest = eigthQueen.isSafeQueenTest;

describe("Testing isSafeQueen function", () => {
  let candidateQueens;

  beforeEach(function() {
    candidateQueens = [];
  });

  it("undefined queen", function() {
    const isSafe = isSafeQueenTest(undefined);
    expect(isSafe).to.equal(true);
  });

  it("zero queen", function() {
    const isSafe = isSafeQueenTest(candidateQueens);
    expect(isSafe).to.equal(true);
  });

  it("one queen", function() {
    const QUEEN = [1, 2];
    candidateQueens.push(QUEEN);
    const isSafe = isSafeQueenTest(candidateQueens);
    expect(isSafe).to.equal(true);
  });

  it("Some queens", function() {
    const QUEEN_ONE = [1, 2];
    const QUEEN_TWO = [2, 3];
    const QUEEN_THREE = [1, 5];
    candidateQueens.push(QUEEN_ONE);
    candidateQueens.push(QUEEN_TWO);
    candidateQueens.push(QUEEN_THREE);
    //console.log(candidateQueens);

    const isSafe = isSafeQueenTest(candidateQueens);
    //console.log(isSafe);
    expect(isSafe).to.equal(false);
  });
});
