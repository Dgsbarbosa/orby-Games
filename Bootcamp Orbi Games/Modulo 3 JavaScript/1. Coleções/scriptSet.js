// Dado o array retorne outro array com valores unicos

//Deste modo ele retorna um Set e nao um array
const meuArray = [30,30,40,5,223,2049,3034,5]

function valoresUnicos(arr) {
    const mySet = new Set (arr)
    return mySet;
}
console.log('Deste modo ele retorna um Set e nao um array')
console.log(valoresUnicos(meuArray))



// Deste modo usamos o argumento Spread, que retornará um array
function valoresUnicos2(arr) {
    const mySet = new Set (arr)
    return [...mySet]; // argumento Spred (...)
}
console.log('Deste modo ele retorna um array')
console.log(valoresUnicos2(meuArray))