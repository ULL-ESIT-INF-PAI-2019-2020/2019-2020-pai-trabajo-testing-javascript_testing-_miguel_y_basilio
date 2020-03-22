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
 * @desc Browser Version: Test de la función add, la cual suma dos números
 * @link https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-trabajo-testing-javascript_testing-_miguel_y_basilio
 */

const assert = chai.assert;

describe('add test', () => {
  it('2 + 3', function() {
    assert.equal(add(2, 3), 5);
  });
  it('7 + 10', function() {
    assert.equal(add(7, 10), 17);
  });
  it('-25 + 10', function() {
    assert.equal(add(-25, 10), -15);
  });
  it('-500 + 1', function() {
    assert.equal(add(-500, 1), -499);
  });
  it('undefined + 1', function() {
    assert.isNaN(add(undefined, 1));
  });
  it('null + 4', function() {
    assert.isNaN(add(null, 4));
  });
  it('NaN + 20', function() {
    assert.isNaN(add(NaN, 20));
  });
});
