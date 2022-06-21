function comparaNumero(x, y){
    if(!x || !y) {console.log("Digite  2 numeros"); return 'FALHA'}

    var soma = (x + y);
    if (x === y){
        console.log('OS NÚMEROS',x ,'E',  y, ' SÃO IGUAIS')
    }
    else{
        console.log('OS NÚMEROS',x ,'E',  y, ' SÃO DIFERENTES') 
    }

    console.log('SUA SOMA É:', soma)
    
    if (soma > 10){
        console.log('QUE É MAIOR QUE 10');

        if (soma > 20){
           console.log('E MAIOR QUE 20')
           
        }
        else{
            console.log('E MENOR QUE 20')
        }
    }
    else{
        console.log('QUE É MENOR QUE', 10) 
    }
}

comparaNumero(1,3)