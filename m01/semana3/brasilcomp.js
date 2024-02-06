let input = {
    "primeiraLetra": "c",
    "segundaLetra": "v",
    "palavras": [
      "aveia",
      "manha",
      "ave"
    ]
  }
let input1 = {
    "primeiraLetra": "a",
    "segundaLetra": "v",
    "palavras": [
      "aveia",
      "manha",
      "ave"
    ]
  }

  function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let palavrasEncontradas = [];
    for (const palavra of palavras) {
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
            palavrasEncontradas.push(palavra)
        }
    }
    if (palavrasEncontradas.length) {
        return palavrasEncontradas.forEach((palavra) => console.log(palavra))
    } else {
        return console.log('NENHUMA');
    }
}

solucao(input.primeiraLetra, input.segundaLetra, input.palavras)
solucao(input1.primeiraLetra, input1.segundaLetra, input1.palavras)

