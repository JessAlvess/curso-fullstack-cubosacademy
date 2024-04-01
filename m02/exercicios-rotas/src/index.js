const express = require('express')
const app = express()
const { listarCarros } = require('./controladores/controladores')

app.get('/carros', listarCarros)

app.listen(4000)