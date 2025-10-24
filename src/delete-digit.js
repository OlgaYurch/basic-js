const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberToString = n.toString();
  const resultsArr = [];

  for (let i = 0; i < numberToString.length; i += 1) {
    const newNumber = numberToString.slice(0, i) + numberToString.slice(i + 1);
    resultsArr.push(Number(newNumber));
  };

  let maxResult = resultsArr[0];
  resultsArr.forEach((currentItem) => {
    if (currentItem > maxResult) {
      maxResult = currentItem;
    }
  });

  return maxResult;
}

module.exports = {
  deleteDigit
};
