// lista encadeada tem menos gasto de memoria, pois posso descartar o que nao utiliza facilmente, mas os nodos ficam de "maos dadas"

class Nodo {
    constructor(element) {
        //ele sempre contem um objeto e a info do proximo
        this.element = element
        this.next = null
        
    }
}

class ListaEncadeadaFinal {
    constructor() {
        //ninguem antes
        this.head = null
        //ninguem depois
        this.tail = null
    }
    add(element) {
        let newNodo = new Nodo(element)
        if (this.head == null) {
            //adicionando a "cabeça"
            this.head = this.tail = newNodo
        } else {
            //Adicionando no final, mas pode ser em qualquer lugar da lista
            //o ultimo elemento da minha lista e o next recebem o elemento
            this.tail.next = newNodo
            this.tail = newNodo
        }
    }

    print() {
        var aux = this.head
        while (aux != null) {
            //apresenta o valor
            console.log(aux.element)
            //Vai para o proximo elemento se tiver
            aux = aux.next
        }
    }
}

class ListaEncadeadaComeco {
    constructor() {
        //ninguem antes
        this.head = null
    }
    add(element) {
        let newNodo = new Nodo(element)
        newNodo.next= this.head
        this.head = newNodo
    }

    print() {
        var aux = this.head
        while (aux != null) {
            //apresenta o valor
            console.log(aux.element)
            //Vai para o proximo elemento se tiver
            aux = aux.next
        }
    }
}

var minhaListaEncadeadaFinal = new ListaEncadeadaFinal()
var minhaListaEncadeadaComeco = new ListaEncadeadaComeco()

console.log("\nAdicionando atras \n")
minhaListaEncadeadaFinal.add("Nodo 1")
minhaListaEncadeadaFinal.add("Nodo 2")
minhaListaEncadeadaFinal.add("Nodo 3")
minhaListaEncadeadaFinal.print()

console.log("\nAdicionando na frente \n")
minhaListaEncadeadaComeco.add("Nodo 1")
minhaListaEncadeadaComeco.add("Nodo 2")
minhaListaEncadeadaComeco.add("Nodo 3")
minhaListaEncadeadaComeco.print()