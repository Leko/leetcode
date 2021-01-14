/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
  return words.filter((_word) => {
    const word = _word.toLowerCase()
    return rows.some((row) => {
      return word.split("").every((c) => row.includes(c))
    })
  })
}
