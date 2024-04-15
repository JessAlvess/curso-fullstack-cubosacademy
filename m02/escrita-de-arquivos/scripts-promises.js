const fs = require('fs/promises')

console.log('Antes de ler');

// const a = fs.readFile('a.txt')

// a.then((data) => {
//     console.log(data.toString());
// })

// a.catch((err) => {
//     console.log(err);
// })



async function funcaoDoFS() {
    const a = await fs.readFile('a.txt')
    console.log(a.toString());
}

funcaoDoFS()

console.log('Depois de ler');