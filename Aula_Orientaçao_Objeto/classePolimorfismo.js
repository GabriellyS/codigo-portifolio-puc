class Pessoa {
    constructor(nome, anoNascimento, profissao){
        this.nome = nome
        this.anoNascimento = anoNascimento
        this.profissao = profissao
    }

    ola() {
        console.log("Olá meu nome é " + this.nome)
    }
    calculaIdade() {
        return new Date().getUTCFullYear() - this.anoNascimento
    }
}

//Usando a herança mas alterando alguma info
class Estudante extends Pessoa{
    constructor (nome, anoNascimento,matricula){
        //sobrescrevendo a profissao semmpre como estudante
        super(nome,anoNascimento,"Estudante")
        this.matricula = matricula
    }
    ola(){
        super.ola()
        console.log("colegas")
    }
}
const pessoa1 = new Pessoa("Gabrielly",1997,"Analista")
const aluno1 = new Estudante("Kalleo",1998,"KA2024")
//console.log(aluno1.ola())

//Adicionando um atributo a todos os objetos da classe
Estudante.prototype.formacao = "Estagiário"
console.log(aluno1.formacao)

class ValidadorCPF {
    static validar(cpf,tamanho){
        if (tamanho == 11) {
            console.log("CPF válido")
        }
        return console.log("CPF inválido")
    }
}

console.log(ValidadorCPF.validar("09386855976",10))