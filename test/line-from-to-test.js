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
 * @desc Test de la función lineFromTo, la cual calcula la recta dado dos puntos
 * @link https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-trabajo-testing-javascript_testing-_miguel_y_basilio
 */

const chai = require('chai');
const expect = chai.expect;

const eigthQueen = require('../src/eight_queens.js');
const lineFromToTest = eigthQueen.lineFromToTest;

describe('Testing lineFromTo function', () => {
  let pointOne;
  let pointTwo;

  beforeEach(function() {
    pointOne = [1, 2];
    pointTwo = [5, 3];
  });

  it('slope with two correct points', function() {
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[0]).to.equal(0.25);
  });

  it('yAtOrigin with two correct points', function() {
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[1]).to.equal(1.75);
  });

  it('slope with an undefined point', function() {
    pointTwo = undefined;
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[0]).to.be.NaN;
  });

  it('slope with an infinite point', function() {
    pointTwo = Infinity;
    const equationStraight = lineFromToTest(pointOne, pointTwo);
    expect(equationStraight[0]).to.be.NaN;
  });
});

