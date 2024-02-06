let input = 'a' 
let input1 = 'abelha'

function solucao(palpite, palavra) {
	//seu codigo aqui
    let acertos = 0;
    for (let index = 0; index < palavra.length; index++) {
        acertos = palavra[index] === palpite ? acertos + 1 : acertos;
    }
    console.log(acertos);

}

solucao(input, input1)
