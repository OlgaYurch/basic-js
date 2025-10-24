const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = '';
  let count = 1;

  for (let i = 1; i <= str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      count +=1;
    } else {
      if (count > 1) {
        encodeStr += count + str[i - 1];
      } else {
        encodeStr += str[i - 1];
      }
      count = 1;
    }
  };

  return encodeStr;
}

module.exports = {
  encodeLine
};
