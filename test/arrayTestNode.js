// Node Version

const chai = require("chai");
const assert = chai.assert;

describe("Array", function() {
  it("should start empty", function() {
    let arr = [];

    assert.equal(arr.length, 0);
  });
});
