lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function trataErro(array, num){
    try{
        if (!array || !num){
            throw ReferenceError("Envie os parâmetros")
        } 
        else if (typeof array !== 'object'){
            throw TypeError('Array precisa ser do tipo OBJECT')
        }
        else if (typeof num !== 'number'){
            throw TypeError('Digite um NÚMERO no parâmetro num')
        }
        else if (num !== array.length){
            throw RangeError('O número é diferente do tamanho do array')
        }
        return array
}
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!')
            console.log(e.message)
        } 
        else if (e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message)
        } 
        else if(e instanceof RangeError){
            console.log('Este erro é um RangeError!')
            console.log(e.message)
        } 
        else{
            console.log('Tipo de erro não esperado: ' + e)
        }
    }
}


console.log(trataErro(lista, 9))

