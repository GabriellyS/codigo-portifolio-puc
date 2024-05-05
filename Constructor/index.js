function Pessoa(){
    this.nome = "Joao"
    this.anoNascimento = 1997
    this.profissao = "Estudante" 
    this.calculaIdade = function(){
        //New Date já é uma funcao do JS
        return new Date().getUTCFullYear() - this.anoNascimento
    }
}

const pessoa1 = new Pessoa
console.log(pessoa1.calculaIdade())
//alterando a idade da Pessoa 1
pessoa1.anoNascimento = 1983
console.log(pessoa1.calculaIdade())