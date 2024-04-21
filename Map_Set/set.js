// TDD - Test Drive Development

var novoset = new Set()

novoset.add('backend')
novoset.add('frontend')
novoset.add('backend')
novoset.add('backend')
//mesmo que eu acesse varias vezes a pagina em 1 minuto, ele so pega o ultimo

//O Set pega um valor simples e evita ter multiplas copias

var resultado = novoset
console.log(resultado)

