/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const A = allowed.split("")
  return words.filter((w) => w.split("").every((c) => allowed.includes(c)))
    .length
}
