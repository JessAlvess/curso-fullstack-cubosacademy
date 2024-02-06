let input = '>>><>'
let input1 = '>'
let input2 = '<'
let input3 = '>>>>>>>>>'

function solucao(sequencia) {
    //seu codigo aqui
   let img = [0, 1, 2, 3, 4, 5, 6];
    let carrousel = 0;
    for (let index = 0; index < sequencia.length; index++) {
        if (sequencia[index] === '<' && carrousel !== 0 ) {
            carrousel -= 1;
        } else if (sequencia[index] === '<' && carrousel === 0){
            carrousel = 6
        } else if (sequencia[index] === '>' && carrousel !== 6) {
            carrousel += 1
        } else {
            carrousel = 0
        };
    }
    console.log(carrousel);
}

solucao(input)
solucao(input1)
solucao(input2)
solucao(input3)

