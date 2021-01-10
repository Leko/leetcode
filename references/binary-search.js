function bin(list, x, start, end) {
  if (start > end) return false
  const mid = Math.floor((start + end) / 2)
  if (list[mid] === x) return true
  if (list[mid] > x) return bin(list, x, start, mid - 1)
  return bin(list, x, mid+1, end)
}
