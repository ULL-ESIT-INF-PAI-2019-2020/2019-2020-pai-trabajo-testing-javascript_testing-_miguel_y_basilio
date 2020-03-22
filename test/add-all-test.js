/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 *
 * @author Miguel Ordoñez
 * @author Basilio Gómez
 * @since 23 de Marzo del 2020
 * @desc Test de la función add en un solo fichero, la cual suma dos números
 * @link https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-trabajo-testing-javascript_testing-_miguel_y_basilio
 */

const assert = require('chai').assert;

/**
 * @desc Dado dos números los suma
 * @param {number} valueOne primer parámetro de la suma
 * @param {number} valueTwo segundo parámetro de la suma
 * @return {number} La suma (numberOne + numberTwo)
 */
const add = function(valueOne, valueTwo) {
  const suma = valueOne + valueTwo;
  return suma;
};

describe('add test', () => {
  it('2 + 3', function() {
    assert.equal(add(2, 3), 5);
  });
});
