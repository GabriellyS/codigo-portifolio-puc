//Testando e entendendo a function

function avaliaParidade(limite){
    for (i=1; i<=limite; i++){
        if (i%2 == 1){
            console.log(i + " é numero é impar!")
        }else{
            console.log(i + " é numero é par!")
        }
    }
}

avaliaParidade(10)