// TDD - Test Drive Development

var novoMap = new Map()

class HistoryMap {

}

//Acessou o site dia 11 do mes 11 de 2011 as 11 da noite
novoMap.set('11/11/11 - 23:30', {title: 'Titulo 1', url: 'URL 1'})
novoMap.set('11/11/11 - 23:30', {})
novoMap.set('11/11/11 - 23:30', {})
//mesmo que eu acesse varias vezes a pagina em 1 minuto, ele so pega o ultimo
novoMap.set('11/11/11 - 23:31', {})

//O Map baseado no ID vai sempre sobrescrever o ultimo item e evitar a duplicata

//O get seleciona pelo ID
var resultado = novoMap.get('11/11/11 - 23:30')
console.log(resultado)