var positiveOrZero = require('./index')

console.log(positiveOrZero(100))  // 100
console.log(positiveOrZero(0))    // 0
console.log(positiveOrZero(-100)) // 0
console.log(positiveOrZero(null)) // 0
console.log(positiveOrZero())     // 0
