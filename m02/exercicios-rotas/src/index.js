const express = require('express')
const app = express()
const { listarCarros, filtrarCarros } = require('./controladores/controladores')

app.use((req, res, next) => {
    const { senha } = req.query
    if (senha) {
        senha === '123' ? next() : res.send('Digite a senha correta')
    } else {
        res.send('Digite a senha para acessar o servidor')
    }
})

app.get('/carros', listarCarros)
app.get('/carros/:id', filtrarCarros)

app.listen(4000)