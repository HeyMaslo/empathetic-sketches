/**
 * Exopse `remap`
 */

module.exports = remap;

/**
* Re-maps a number from one range to another. In the example above, the number '25' is converted from
* a value in the range 0..100 into a value that ranges from the left edge (0) to the right edge (width) of the screen.
* Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful.
*
* @param {float} value        The incoming value to be converted
* @param {float} istart       Lower bound of the value's current range
* @param {float} istop        Upper bound of the value's current range
* @param {float} ostart       Lower bound of the value's target range
* @param {float} ostop        Upper bound of the value's target range
*
* @returns {float}
*/

function remap(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};
