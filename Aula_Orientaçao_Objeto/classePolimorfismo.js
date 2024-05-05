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
        console.log("Olá colégas")
    }
}

const aluno1 = new Estudante("Kalleo",1998,"KA2024")
console.log(aluno1)
