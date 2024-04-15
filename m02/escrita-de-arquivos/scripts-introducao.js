const fs = require('fs')

console.log('antes de ler');
//leitura de arquivo sincrono
// const a = fs.readFileSync('a.txt').toString()

// console.log(a);


fs.readFile('b.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})

console.log('Depois de ler');