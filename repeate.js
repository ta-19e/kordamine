/**
 * Returns a String value that is made from count copies appended together. If count is 0,
 * the empty string is returned.
 *
 * @param {string} str   string to repeate
 * @param {int} count number of copies to append
 * @returns {string}
 */
function repeate(str, count) {
  if (Number.isNaN(+count)) {
    throw new Error('count argument is not a number');
  }

  return String(str).repeat(count);
}

module.exports = repeate;
