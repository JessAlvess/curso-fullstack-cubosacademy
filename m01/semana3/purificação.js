let animal1 = '*Canis %lupus )familiaris';
let animal2 = 'Felis) silvestris *catus&';
let animal3 = '$Ailuropoda@ melanoleuca!';




function solucao(stringCorrompida) {
    let caracteres = ['!','@','#','$', '%', '&', '*', '(', ')']
    for (let index = 0; index < stringCorrompida.length; index++) {
        for (let i = 0; i < caracteres.length; i++) {
            if (stringCorrompida[index] === caracteres[i]) {
                stringCorrompida = stringCorrompida.replace(stringCorrompida[index], '')
            }
        }
    }
   return console.log(stringCorrompida);
}

solucao(animal1);
solucao(animal2);
solucao(animal3);