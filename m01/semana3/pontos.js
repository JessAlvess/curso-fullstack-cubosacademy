let input = [
    "V",
    "E",
    "V",
    "E"
  ]

function solucao(resultados) {
	//seu codigo aqui
    let pontosTotais = 0;
    for (const resultado of resultados) {
        if (resultado === 'V') {
            pontosTotais += 3
        } else if (resultado === 'E') {
            pontosTotais += 1
        }
    }
    console.log(pontosTotais);
}

solucao(input)
