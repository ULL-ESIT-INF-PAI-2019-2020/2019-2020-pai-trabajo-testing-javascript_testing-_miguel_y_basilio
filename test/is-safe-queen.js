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
 * @desc Test de la función isSafeQueen, la cual verifica si un conjunto de
 * reinas están seguras
 * @link https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-trabajo-testing-javascript_testing-_miguel_y_basilio
 */

const chai = require('chai');
const expect = chai.expect;

const eigthQueen = require('../src/eight-queens.js');
const isSafeQueenTest = eigthQueen.isSafeQueenTest;

describe('Testing isSafeQueen function', () => {
  let candidateQueens;

  beforeEach(function() {
    candidateQueens = [];
  });

  it('undefined queen', function() {
    const isSafe = isSafeQueenTest(undefined);
    expect(isSafe).to.equal(false);
  });

  it('zero queen', function() {
    const isSafe = isSafeQueenTest(candidateQueens);
    expect(isSafe).to.equal(true);
  });

  it('one queen', function() {
    const QUEEN = [1, 2];
    candidateQueens.push(QUEEN);
    const isSafe = isSafeQueenTest(candidateQueens);
    expect(isSafe).to.equal(true);
  });

  it('Some queens diagonally', function() {
    const QUEEN_ONE = [1, 2];
    const QUEEN_TWO = [2, 3];
    const QUEEN_THREE = [3, 4];

    candidateQueens.push(QUEEN_ONE);
    candidateQueens.push(QUEEN_TWO);
    candidateQueens.push(QUEEN_THREE);

    const isSafe = isSafeQueenTest(candidateQueens);
    expect(isSafe).to.equal(false);
  });
});
