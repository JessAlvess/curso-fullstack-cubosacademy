const express = require('express')
const app = express()
const { listarCarros, filtrarCarros } = require('./controladores/controladores')

app.get('/carros', listarCarros)
app.get('/carros/:id', filtrarCarros)

app.listen(4000)