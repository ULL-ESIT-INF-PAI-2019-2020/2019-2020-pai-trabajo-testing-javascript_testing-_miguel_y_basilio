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

  it("Two points are not in diagonal line", function() {
    const isDiagonal = isDiagonalTest(pointOne, pointThree);
    expect(isDiagonal).to.equal(false);
  });

  it("One of the two points given is undefined", function() {
    pointTwo = undefined;
    const isDiagonal = isDiagonalTest(pointOne, pointTwo);
    expect(isDiagonal).to.equal(false);
  });


  it("One of the two points given is null", function() {
    pointOne = null;
    const isDiagonal = isDiagonalTest(pointOne, pointTwo);
    expect(isDiagonal).to.equal(false);
  });


  it("One of the two points given is NaN", function() {
    pointTwo = NaN;
    const isDiagonal = isDiagonalTest(pointOne, pointTwo);
    expect(isDiagonal).to.equal(false);
  });
});
