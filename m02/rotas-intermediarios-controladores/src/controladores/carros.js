const { carro } = require('./bancodedados/carroArray')

const encontrarCarros = (req, res) => {
    const { modelo } = req.query
    let result = carros

    if (modelo) {
        result = carros.filter((carro) => {
            return carro.modelo === modelo
        })
    }
    res.send(result)
}

const filtrarCarros = (req, res) => {
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(req.params.id)
    })
    res.send(carroEncontrado)
}

module.exports = {
    encontrarCarros,
    filtrarCarros
}