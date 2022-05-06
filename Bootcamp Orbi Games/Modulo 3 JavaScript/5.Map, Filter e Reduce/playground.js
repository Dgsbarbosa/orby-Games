// Usando o this
console.log('Map com this');
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item *   this.value;
    }, thisArg)
}

const nums = [1,2]

console.log('this -> maçã', mapComThis(nums,maca));
console.log('this -> laranja', mapComThis(nums,laranja));

// Fazendo sem this

console.log('\n Map sem this');

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}
const nums2 = [2,4,6,8,10];

console.log(mapSemThis(nums2));
console.log(nums2);

// Usando filter

console.log('Filter');

function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 ===0;
}

const meuArray = [1,23,55,67,30,2,4]

console.log(filtraPares(meuArray));

//Reduce

console.log('\n Reduce');

function somaNumeros(arr){
    return arr.reduce(function(prev,current){
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [1,2]
console.log(somaNumeros(arr));

console.log('\n Reduce Exercicio 2');

const lista =[
    {
        name: 'sabão em pó',
        preco: 30,
    },
    {
        name:'amaciante',
        preco: 20,
},
    {
        name: 'palha de aço',
        preco: 15,
    }
];

const saldoDisponivel = 100

function calculoSaldo (saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("Rodada:", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco
    }, saldoDisponivel);
}

console.log(calculoSaldo(saldoDisponivel, lista));

