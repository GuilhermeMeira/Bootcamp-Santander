function verificaPalindromo(string) {
    if(!string) return;

    let aoContrario = string.split("").reverse().join("") // split divide a string em um array com cada caracter.

    if (aoContrario === string){

        return `A palavra ${string} é um palíndromo pois lida ao contrário fica ${aoContrario}`
    }
    else{

        return `A palavra ${string} não é um palíndromo pois lida ao contrário fica ${aoContrario}`
    }

}

console.log(verificaPalindromo('ovo'))