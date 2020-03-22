/**
 * @desc Dado dos números los suma
 * @param {number} valueOne primer parámetro de la suma
 * @param {number} valueTwo segundo parámetro de la suma
 * @return {number} La suma (numberOne + numberTwo)
 */
function add(valueOne, valueTwo) {
  if ((valueOne !== null) && (valueTwo !== null)) {
    const suma = valueOne + valueTwo;
    return suma;
  }
  return NaN;
};
