const assert = require("chai").assert
const {add} = require("../src/add");

describe('Directory Structure', () => {

  it("add test", function() {
    assert.equal(add(2,3), 5);
  });

});