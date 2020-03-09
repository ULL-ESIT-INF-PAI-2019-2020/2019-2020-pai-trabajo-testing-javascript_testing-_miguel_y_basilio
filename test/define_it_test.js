const assert = require("chai").assert

const add = function(valueOne, valueTwo) {
  const suma = valueOne + valueTwo;
  return suma;
}


describe('Define it', () => {

  it("add test", function() {
    assert.equal(add(2,3), 5);
  });
  
});