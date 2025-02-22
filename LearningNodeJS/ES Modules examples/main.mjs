// uses the new ES6 standard to import packages
// if the module returns an object, we can use the {} to destructure it
import add from './math-esm.mjs'

console.log(add(1,3))