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
//Nome e sobrenome
const pessoa1 = new Pessoa(["Gabrielly", "dos santos"],1997,"Analista")
const pessoa2 = new Pessoa("Nice",1968,"Corretora")

console.log(pessoa1.ola() + " e tenho " + pessoa1.calculaIdade() + " anos")
console.log("Meu nome é " + pessoa2.nome + " e minha idade é " + pessoa2.calculaIdade())

//Herança na Classes
//extends para puxar a classe pai
//super para usar a funcao do pai
class Estudante extends Pessoa{
    constructor (nome, anoNascimento,profissao,matricula){
        //sobrescrevendo a profissao semmpre como estudante
        super(nome,anoNascimento,"Estudante")
        this.matricula = matricula
    }
}

const aluno = new Estudante("Kalleo",1998,"KA2024")
console.log("Meu nome é " + aluno.nome + " e minha matricula é " + aluno.matricula + " eu tenho " + aluno.calculaIdade() + " anos")
//usando uma funcao do pai
console.log(aluno.ola())