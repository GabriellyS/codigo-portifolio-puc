array = [4,5,6,7,8,9,10]
regraImpar = (item) => item%2 != 0

//SOME (Investiga o array e ve se tem algum elemento com esse comportamento)
console.log("Tem ímpar? " + array.some(regraImpar))

//EVERY (Investiga o array e ve se tem todos têm esse comportamento)
console.log("Todos sao ímpar? " + array.every(regraImpar))

//FILTER (Pega o array e devolve outro array com a regra)
console.log("Filtrar números ímpares: " + array.filter(regraImpar))

//FOR EACH (uma açao para cada elemento)
array.forEach(numero => console.log(numero + " " + (numero%2 ==0? "par" : "impar")))

//MAP
var newArray = array.map((item) => item*2)
console.log(newArray)
