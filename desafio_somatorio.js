function somatorio(numero){
    var soma = 0;
    for (var i=0;i<numero;i++){
        if((i % 3 == 0) || (i % 5 == 0)){
            soma = soma + i;
            console.log(i)
        }
    }
    
    return soma;
}


console.log(somatorio(10));