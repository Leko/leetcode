/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let a = 0
  for (let c of s.slice(0, s.length / 2).toLowerCase()) {
    if ("aeiou".indexOf(c) !== -1) {
      a++
    }
  }
  let b = 0
  for (let c of s.slice(s.length / 2).toLowerCase()) {
    if ("aeiou".indexOf(c) !== -1) {
      b++
    }
  }
  return a === b
}
