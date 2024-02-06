let input = [5, 10, 3]
let input1 = [30, 10, 54, 76, 1, 4, 35]

function solucao(precos) {
    //seu codigo aqui
   function sub(minuendo) {
    function result(subtraendo) {
        return minuendo - subtraendo 
    }
    return result;
   }
   let perdaMinima = +Infinity;
   for (let minuendo = 0; minuendo < precos.length; minuendo++) {
    for (let subtraendo = 0; subtraendo < precos.length; subtraendo++) {
        perdaMinima = sub(precos[minuendo])(precos[subtraendo]) > 0 
        && sub(precos[minuendo])(precos[subtraendo]) < perdaMinima && subtraendo > minuendo
        ? sub(precos[minuendo])(precos[subtraendo]) : perdaMinima;
    }
    
   }
   return console.log(perdaMinima);
}

// solucao(input)
solucao(input1)
