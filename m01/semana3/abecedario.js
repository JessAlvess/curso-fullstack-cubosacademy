let input = [
    {
      "letra": "m",
      "palavras": [
        "mamao",
        "maca",
        "melao",
        "melancia",
        "laranja"
      ]
    }
  ]

function solucao(letra, palavras) {
	//seu codigo aqui
    let perdedores = 0;
    for (const palavra of palavras) {
        if (palavra[0] !== letra) {
            perdedores += 1;
        }
    }
    return console.log(perdedores);
}

solucao(input[0].letra, input[0].palavras)