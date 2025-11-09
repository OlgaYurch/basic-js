const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i += 1) {
    result[i] = [];
    for (let j = 0; j < cols; j += 1) {
      let count = 0;
      for (let deltaX = -1; deltaX <= 1; deltaX += 1) {
        for (let deltaY = -1; deltaY <= 1; deltaY += 1) {
          if (deltaX === 0 && deltaY === 0) continue;
          const newI = i + deltaX;
          const newJ = j + deltaY;
          if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
            if (matrix[newI][newJ] === true) {
              count += 1;
            }
          }
        }
      }
      result[i][j] = count;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
