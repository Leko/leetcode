function isVowel(c) {
  return "aiueoAIUEO".includes(c)
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  function indexOf(s, fromIndex = 0) {
    for (let i = fromIndex; i < s.length; i++) {
      if (isVowel(s[i])) return i
    }
    return -1
  }
  function lastIndexOf(s, fromIndex = s.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (isVowel(s[i])) return i
    }
    return -1
  }

  let cursor = indexOf(s)
  let endCursor = lastIndexOf(s)
  const result = s.split("")
  while (cursor !== -1 && endCursor !== -1 && cursor < endCursor) {
    const [a, b] = [result[cursor], result[endCursor]]
    console.log(cursor, endCursor, a, b)
    result[cursor] = b
    result[endCursor] = a
    cursor = indexOf(result, cursor + 1)
    endCursor = lastIndexOf(result, endCursor - 1)
  }
  return result.join("")
}
