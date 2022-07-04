array = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function reduceTest(array){

    return array.reduce((acumulador, valor_atual) => acumulador + valor_atual );
}

console.log(reduceTest(array))