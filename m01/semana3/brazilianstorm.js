let input = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]
let input1 = [100, 100, 100, 50]

function solucao(notas) {
	//seu codigo aqui
    let maiorNota = 0, menorNota = +Infinity;
    for (const nota of notas) {
        maiorNota = nota > maiorNota ? nota : maiorNota;
        menorNota = nota < menorNota ? nota : menorNota;
    }
    let soma = notas.reduce((acc, cv) => acc + cv, 0);
    return console.log(((soma - maiorNota) - menorNota) / (notas.length - 2))



}

solucao(input)
solucao(input1)
