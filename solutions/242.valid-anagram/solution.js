/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const list = t.split("")
  for (let n of s) {
    const idx = list.indexOf(n)
    if (idx === -1) {
      return false
    }
    list.splice(idx, 1)
  }
  return true
}
