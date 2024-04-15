const fs = require('fs/promises')


async function funcaoLerJson() {
    const arquivoJson = await fs.readFile('teste.json')
    
    const pessoas = JSON.parse(arquivoJson)

    pessoas.push({
        nome: 'Jessé',
        idade: 29
    })

    const arrayJson = JSON.stringify(pessoas)

    console.log(arrayJson);

}

funcaoLerJson()