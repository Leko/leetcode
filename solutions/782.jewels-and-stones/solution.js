/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const lut = {}
  for (let c of stones) {
    lut[c] = lut[c] || 0
    lut[c]++
  }

  return jewels.split("").reduce((acc, c) => acc + (lut[c] || 0), 0)
}
