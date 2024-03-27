const lodash = require('lodash')
// const array = require('./array')
const { arrayNumeros, arrayLetras } = require('./array')

console.log(arrayLetras, arrayNumeros);

const arrayUnico = lodash.uniq(arrayNumeros)

console.log(arrayUnico);