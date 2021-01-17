/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return Array.from(
    new Array(n),
    (_, i) =>
      ["FizzBuzz", "Buzz", "Fizz", String(i + 1)][
        Math.sign((i + 1) % 3) + Math.sign((i + 1) % 5) * 2
      ]
  )
}
