//Using modules for encapsulation
import names, { john, peter } from './module.js'
import sayHi from './utils.js'
console.log(names)
console.log(sayHi)

sayHi('Xena')
sayHi(john)
sayHi(peter)