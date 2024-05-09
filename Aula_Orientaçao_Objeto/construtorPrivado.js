class Pessoa {
    //protegido de visao, e nao de alteraçao
    #nome
    constructor(nome, anoNascimento, profissao){
        this.#nome = nome
        this.anoNascimento = anoNascimento
        this.profissao = profissao
    }

    getNome(){
        return this.#nome
    }
    //para proteger de ediçao
    setNome(valor){
       this.#nome = valor 
    }

    calculaIdade() {
        return new Date().getUTCFullYear() - this.anoNascimento
    }
}

const pessoa1 = new Pessoa(["Gabrielly", "dos santos"],1997,"Analista")
//Nao funciona pq esta privado
//console.log("Meu nome é " + pessoa1.#nome + " e minha idade é " + pessoa1.calculaIdade())

//Por isso preciso chamar o get
console.log("Meu nome é " + pessoa1.getNome() + " e minha idade é " + pessoa1.calculaIdade())

// aqui eu puxo o set para verificar e alterar corretamente
let nome1 = pessoa1.setNome(["Joao", "de sousa"])
console.log("Meu nome é " + pessoa1.getNome() + " e minha idade é " + pessoa1.calculaIdade())