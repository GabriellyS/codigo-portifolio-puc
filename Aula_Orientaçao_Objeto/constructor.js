function Pessoa(nome,anoNascimento,profissao){
    this.nome = nome
    this.anoNascimento = anoNascimento
    this.profissao = profissao
    this.calculaIdade = function(){
        //New Date já é uma funcao do JS
        return new Date().getUTCFullYear() - this.anoNascimento
    }
}

const pessoa1 = new Pessoa("Joao", 1997, "Estudante")
console.log(pessoa1.nome + " tem " + pessoa1.calculaIdade() + " anos e esta na profissão de " + pessoa1.profissao)
//alterando a idade da Pessoa 1
//pessoa1.anoNascimento = 1983
//console.log(pessoa1.calculaIdade())

const pessoa2 = new Pessoa("Maria", 1968, "Geóloga")
console.log(pessoa2.nome + " tem " + pessoa2.calculaIdade()+ " anos e esta na profissão de " + pessoa2.profissao)

//Instruindo para criar um novo objeto conforme o objeto anterior foi criado
const pessoa3 = Object.create(pessoa2)
console.log(pessoa3.nome + " tem " + pessoa3.calculaIdade()+ " anos e esta na profissão de " + pessoa3.profissao)

//Usando uma Herança Prototipada
Pessoa.prototype.saudar = function(){
    console.log("Olá")
}
console.log(pessoa1.saudar())
console.log(pessoa2.saudar())