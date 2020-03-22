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
 * @desc Browser Version: Test de una array
 * @link https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-trabajo-testing-javascript_testing-_miguel_y_basilio
 */

const assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    const ARRAY = [];
    assert.equal(ARRAY.length, 0);
  });
});
