const express = require('express')
const { encontrarCarros, filtrarCarros } = require('./controladores/carros')
const app = express()

const primeiroIntermediario = (req, res, next) => {
    console.log(('Cheguei no primeiro intermediario'));
    next()
}

const segundoIntermediario = (req, res, next) => {
    console.log(('Cheguei no segundo intermediario'));
    next()
}

const intermediarioDaRota = (req, res, next) => {
    console.log(('Cheguei no intermediario da rota'));
    next()
}

app.use(primeiroIntermediario)
app.use(segundoIntermediario)

app.get('/', (req, res) => {
    res.send('Página inicial 1')
})

app.get('/carros', intermediarioDaRota, encontrarCarros)

app.get('/carros/:id', filtrarCarros)

app.listen(3000)