const precos = [5, 10.5, 20, 30, 40, 50, 100]

function saldoSuficiente(array, saldo){
    precoTotal = array.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    
    return (saldo - precoTotal)
}

console.log(`Sobrarão:${saldoSuficiente(precos, 500)} reais`)

