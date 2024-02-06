let input = [0, 10, 50, 70, 80, 30]
let input1 = [0, 50, 90, 80, 100, 80, 40]

function solucao(disparos) {
	//seu codigo aqui
    let quantidadeDeDisparos = 0;
    for (let pontos = 0; pontos < disparos.length; pontos++) {
        quantidadeDeDisparos = disparos[pontos] > 70 ? quantidadeDeDisparos += 1 : quantidadeDeDisparos;
    }
    if (quantidadeDeDisparos >= 3) {
        console.log(quantidadeDeDisparos);
    } else {
        console.log('ELIMINADO');
    }
}

solucao(input)
solucao(input1)
