const express = require('express')

const app = express()

const carros = [
    { id:1, marca: 'chevrolet', modelo: 'montana'},
    { id:2, marca: 'chevrolet', modelo: 'kadett'},
    { id:3, marca: 'chevrolet', modelo: 'celta'},
    { id:4, marca: 'chevrolet', modelo: 'blazer'},
    { id:5, marca: 'ford', modelo: 'focus'},
    { id:6, marca: 'ford', modelo: 'ranger'}
]


app.get('/', (req, res) => {
    res.send('Página inicial 1')
})

app.get('/carros', (req, res) => {
    res.send(carros)
})

app.get('/carros/:id', (req, res) => {
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(req.params.id)
    })
    res.send(carroEncontrado)
})

app.listen(3000)