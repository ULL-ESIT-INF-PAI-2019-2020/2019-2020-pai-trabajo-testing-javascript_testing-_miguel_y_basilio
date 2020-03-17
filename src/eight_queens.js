/** Universidad de La Laguna
    Escuela Superior de Ingeniería y Tecnología
    Grado en Ingeniería Informática
    Asignatura: Programación de Aplicaciones Interactivas
    Curso: 3º
    Práctica 3 PAI - 8 Reinas
    @author Autor: Miguel Ángel Ordoñez Morales
    Correo: alu0101281087@ull.es
    @since 10/03/2020
    @desc Contiene la implementación de una función para calcular todos los
              escenarios donde el juego de las 8 reinas es valido. Para que un
              esceneario sea valido, ninguna reina puede amanazar a otra, para
              ello no pueden estar en la misma fila, columna ni diagonal
Referencias:  Enunciado de la práctica:
              https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-4-8queens-miguel141097/blob/master/2019-2020_p04_8Queens.md              Repositorio git con este código:
              https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-4-8queens-miguel141097

*/

'use strict';

const now = require('performance-now');

function isValidPoint(point) {
  return ((point !== undefined) && (point !== null) && (point.length === 2));
}

/**
 * @desc Calcula la ecuación de la recta dado dos puntos
 * @param {[number, number]} pointOne Coordenas del primer punto [x,y]
 * @param {[number, number]} pointTwo Coordenas del segundo punto [x,y]
 * @return {[number, number]} Retorna la ecuación de la recta tal que [m,b],
 * siendo m la pendiente y b la ordenada en el origen
 */
function lineFromTo(pointOne, pointTwo) {
  if (isValidPoint(pointOne) && isValidPoint(pointTwo)) {
    const xInitial = pointOne[0];
    const yInitial = pointOne[1];
    const xEnd = pointTwo[0];
    const yEnd = pointTwo[1];

    const slope = (yEnd - yInitial)/(xEnd - xInitial);
    const xAtOrigin = yInitial - (xInitial * slope);
    return [slope, xAtOrigin];
  }
  return [NaN, NaN];
}

exports.lineFromToTest = lineFromTo;

/**
 * @desc Calcula si dos puntos están en una diagonal
 * @param {[number, number]} pointOne Coordenas del primer punto [x,y]
 * @param {[number, number]} pointTwo Coordenas del segundo punto [x,y]
 * @return {boolean} Retorna verdadero si los puntos estan en una diagonal, en
 * otro caso falso
 */
function isDiagonals(pointOne, pointTwo) {
  const equationStraight = lineFromTo(pointOne, pointTwo);
  const slope = equationStraight[0];
  if ((slope === 1) || (slope === -1)) {
    return true;
  }
  return false;
}

function isValidArray(array) {
  return ((array !== undefined) && (array !== null));
}

/**
 * @desc Calcula si un conjunto de reinas no se amenza
 * @param {[number, number]} candidateQueens Posición de las reinas, donde [x,y]
 * representa las coordenas de de cada reina en el tablero
 * @return {boolean} Retorna verdadero si las reinas no se amenazan
 */
function isSafeQueen(candidateQueens) {
  if (isValidArray()) {
    const countQueens = candidateQueens.length;
    for (let queenOne = 0; queenOne < countQueens; queenOne ++) {
      for (let queenTwo = queenOne + 1; queenTwo < countQueens; queenTwo ++) {
        if (isDiagonals(candidateQueens[queenOne], candidateQueens[queenTwo])) {
          return false;
        }
      }
    }
  }
  return true;
}

exports.isSafeQueenTest = isSafeQueen;

/**
 * @desc Construye un nuevo vector a partir del vector original, pero sin el
 * elemento indicado
 * @param {[number]} originalArray Vector original
 * @param {number} elementErase Elemento a eliminar del vector
 * @return {[number]} Retorna el nuevo vector
 */
function arrayWithout(originalArray, elementErase) {
  const tempArray = [];
  for (const element of originalArray) {
    if (element !== elementErase) {
      tempArray.push(element);
    }
  }
  return tempArray;
}

/**
 * @desc Calcula todas las posibles combinaciones del reto de las 8 reinas.
 * Escoge una posible reina, valiendose de las permutaciones, donde cada
*  posición nueva se asegura que no se repitan las filas o columnas, por
*  lo tanto la única validación que se hace es en las diagonales
 * @param {[number, number]} queens Posición de las reinas, donde [x,y]
 * representa las coordenas de de cada reina en el tablero
 * @param {[number]} candidateColumns Son las columnas en las cuales
 * todavia no se ha colocado una reina
 * @param {number} sizeBoard Tamaño del tablero
 * @param {[[number, number]]} allCombinations Contiene todas la combinaciones
 * validas de reina, inicialmente vacio
 */
function eightQueens(queens, candidateColumns, sizeBoard, allCombinations) {
  if (queens.length === sizeBoard) {
    allCombinations.push(queens);
  } else {
    for (const chosenColumn of candidateColumns) {
      const candidateQueens = queens.concat([[queens.length, chosenColumn]]);
      const remainingColumns = arrayWithout(candidateColumns, chosenColumn);

      if (isSafeQueen(candidateQueens)) {
        eightQueens(candidateQueens, remainingColumns, sizeBoard,
            allCombinations);
      }
    }
  }
}

/**
 * @desc Muestra la notación algebraica de las reinas
 * @param {[[number, number]]} queenCombination Posición de las reinas, donde
 * [x,y] representa las coordenas de de cada reina en el tablero
 */
function printAlgebraicNotation(queenCombination) {
  const output = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const queen of queenCombination) {
    let queenNotation = '';
    queenNotation += alphabet.charAt(queen[0]);
    queenNotation += queen[1];
    output.push(queenNotation);
  }
  console.log(output.join(' '));
}


/**
 * @desc Dibuja el tablero de ajedrez para una combianción de reinas
 * @param {[[number, number]]} queenCombination Posición de las reinas, donde
 * [x,y] representa las coordenas de de cada reina en el tablero
 * @param {*} sizeBoard Tamaño del tablero
 */
function printBoard(queenCombination, sizeBoard) {
  let posQueen = 0;
  for (let row = 0; row < sizeBoard; row ++) {
    const queen = queenCombination[posQueen];
    const columnQuenn = queen[1];
    let output = '';

    for (let column = 0; column < sizeBoard; column ++) {
      if (column === columnQuenn) {
        output += 'Q';
      } else {
        output += '.';
      }
    }
    console.log(output);
    posQueen ++;
  }
}


/**
 * @desc Dibuja todos los tableros de ajedrez para las distintas combianción de
 * reinas
 * @param {[ [[number, number]] ]} allCombinations Contiene todas los tableros
 * validos con las posiciones de reinas, donde [x,y] representa las coordenas
 * de cada reina en el tablero
 * @param {*} sizeBoard Tamaño del tablero
 */
function printAllBoards(allCombinations, sizeBoard) {
  for (let board = 0; board < allCombinations.length; board ++) {
    console.log(`Tablero # ${board + 1}`);
    printBoard(allCombinations[board], sizeBoard);
    printAlgebraicNotation(allCombinations[board]);
    console.log('------------------');
  }
}

/**
 * @desc Calcula el tiempo para resolver el problema y muestra cada solución.
 * Envuelve la función recursiva que calcula todas las posibles
 * combinaciones de tablero con 8 reina
 */
function calculateBoard() {
  const sizeBoard = 8;
  const allCombinations = [];
  const queens = [];
  const candidateColumns = [];

  for (let candidate = 0; candidate < sizeBoard; candidate ++) {
    candidateColumns.push(candidate);
  }

  const start = now();
  eightQueens(queens, candidateColumns, sizeBoard, allCombinations);
  const end = now();

  printAllBoards(allCombinations, sizeBoard);

  const time = ((end - start)/1000).toFixed(4);
  console.log(`${time} segundos`);
}

//calculateBoard();


const QUEEN_ONE = [1, 2];
const QUEEN_TWO = [2, 3];
console.log(isDiagonals(QUEEN_TWO, QUEEN_ONE));