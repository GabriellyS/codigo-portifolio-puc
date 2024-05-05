// TDD - Test Drive Development

function EntendendoArray() {
    var novoset = new Set()

    novoset.add('backend')
    novoset.add('frontend')
    novoset.add('Ambos')
    novoset.add('backend')
    //mesmo que eu acesse varias vezes a pagina em 1 minuto, ele so pega o primeiro

    //O Set pega um valor simples e evita ter multiplas copias

    var resultado = novoset
    console.log(resultado)
}

//removendo elementos duplicados de um array

function removerDuplicado() {
    const numeros = [1,2,2,2,3,4,4,4,6,5,7,8,8,8,9,9]
    
    var novosNumeros = new Set(numeros)

    console.log(novosNumeros)
    
}

removerDuplicado()