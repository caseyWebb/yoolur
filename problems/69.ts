import { generatePrimes } from './lib'

const UPPER_LIMIT = 1000000

let n = 1

for (const p of generatePrimes()) {
  const next = n * p
  if (n * p <= UPPER_LIMIT) {
    n *= p
  } else {
    break
  }
}

console.log(n)
