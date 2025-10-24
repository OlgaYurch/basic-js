const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = String(options.addition === undefined ? '' : options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let addStr = '';
  let resultStr = '';

  for (let i = 0; i < additionRepeatTimes; i += 1) {
    addStr += addition;
    if (i < additionRepeatTimes - 1) {
      addStr += additionSeparator;
    };
  };

  for (let j = 0; j < repeatTimes; j += 1) {
    resultStr += str;
    resultStr += addStr;
    if (j < repeatTimes - 1) {
      resultStr += separator;
    };
  };

  return resultStr;
}

module.exports = {
  repeater
};
