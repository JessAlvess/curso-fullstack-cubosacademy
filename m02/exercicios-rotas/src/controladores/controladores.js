const { carros } = require('../carros')

const listarCarros = (req, res) => {
    let result = carros
    const { marca, cor } = req.query  
    if (marca && !cor) {
        result = result.filter((carro) => {
            return carro.marca === marca
        })
    } else if (cor && !marca) {
        result = result.filter((carro) => {
            return carro.cor === cor
        })
    } else if (marca && cor) {
        result = result.filter((carro) => {
            return carro.cor === cor && carro.marca === marca
        })
    }

    res.send(result)
}

module.exports = {
    listarCarros
}