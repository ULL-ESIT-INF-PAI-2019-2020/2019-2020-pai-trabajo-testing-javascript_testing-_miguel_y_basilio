const chai = require('chai');
const expect = chai.expect;

const eigthQueen = require("../src/eight_queens.js");
const lineFromToTest = eigthQueen.lineFromToTest;

describe('Testing lineFromTo function', () => {
  let pointOne;
  let pointTwo;
  
  beforeEach(function() {
    pointOne = [1,2];
    pointTwo = [5,3];
  });

  it("slope", function() {
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[0]).to.equal(0.25);
  });

  it("xAtOrigin", function() {
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[1]).to.equal(1.75);
  });

  it("point is undefined", function() {
    pointTwo = undefined;
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[0]).to.be.NaN;
  });
  
});

