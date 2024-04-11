const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground')

// getCityFromZipcode('83215000').then(cidade => {
//     console.log(cidade)
// }).catch(erro => {
//     console.log(erro);
// })

// const cidade = getCityFromZipcode()

// cidade.catch( cidade => {
//     console.log(cidade);
// })

// cidade.then(erro => {
//     console.log(erro);
// })

// console.log(cidade);

// getCityFromZipcode('83215000').then(cidade => {
//         console.log(cidade)
//     }).catch(erro => {
//         console.log(erro);
//     })

// getStateFromZipcode('83215000').then(uf => {
//     console.log(uf);
// })


// async / await
async function cep() {
    const cidade = await getCityFromZipcode('83215000')
    console.log(cidade);
    const estado = await getStateFromZipcode('83215000')
    console.log(estado);
}

cep()
