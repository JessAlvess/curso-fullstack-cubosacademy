let input = [100, 500, 100, 200, 50]
let input1 = [100, 100, 100, 50]

function solucao(precos) {
    //seu codigo aqui
    let soma = 0;
    let menor = +Infinity;
    for (const preco of precos) {
        menor = preco < menor ? preco : menor;
        soma += preco
    }
    if (precos.length < 5) {
        return console.log(soma);
    } else {
        return console.log(soma - menor);
    }
}

solucao(input)
solucao(input1)
