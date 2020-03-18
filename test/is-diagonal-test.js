const chai = require('chai');
const expect = chai.expect;

const eigthQueen = require("../src/eight_queens.js");
const isDiagonalTest = eigthQueen.isDiagonalTest;

describe("Testing isDiagonalTest function", () => {
  let pointOne;
  let pointTwo;
  let pointThree

  beforeEach(function() {
    pointOne = [1, 2];
    pointTwo = [2, 3];
    pointThree = [5, 8];

  });

  it("Two points form a diagonal line", function() {
    const isDiagonal = isDiagonalTest(pointOne, pointTwo);
    expect(isDiagonal).to.equal(true);
  });

  it("Two points aare not in diagonal line", function() {
    const isDiagonal = isDiagonalTest(pointOne, pointThree);
    expect(isDiagonal).to.equal(false);
  });

  /*it("point is undefined", function() {
    pointTwo = undefined;
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[0]).to.be.NaN;
  });*/
});
