# positive-or-zero

A Node.js package that returns VALUE if VALUE is positive, zero in every other case

## Usage

First, install the package using npm: 

    npm install positive-or-zero --save

Then, require the package and use it like so:

    var positiveOrZero = require('positive-or-zero')

    console.log(positiveOrZero(100))  // 100

    console.log(positiveOrZero(0))    // 0
    console.log(positiveOrZero(-100)) // 0
    console.log(positiveOrZero(null)) // 0
    console.log(positiveOrZero())     // 0

## Licence

Apache 2.0