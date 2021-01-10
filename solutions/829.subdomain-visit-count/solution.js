/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = new Map()
  for (let line of cpdomains) {
    const [c, s] = line.split(" ")
    const parts = s.split(".")
    for (let i = 0; i < parts.length; i++) {
      const domain = parts.slice(i).join(".")
      const count = map.get(domain) ?? 0
      map.set(domain, +c + count)
    }
  }
  return [...map.entries()].map(([d, c]) => `${c} ${d}`)
}
