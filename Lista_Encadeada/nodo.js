// lista encadeada tem menos gasto de memoria, pois posso descartar o que nao utiliza facilmente, mas os nodos ficam de "maos dadas"

class Nodo {
    constructor(element){
        //ele sempre contem um objeto e a info do proximo
        this.element = element
        this.next = null
    }
}

class ListaEncadeada {
    constructor(){
        this.count = 0
        //ninguem antes
        this.header = null
        //ninguem depois
        this.tail = null
    }
    add(element){
        if (this.count == 0){
            //adicionando a "cabeça"
            this.header=this.tail=element
        }else{
            //Adicionando no final, mas pode ser em qualquer lugar da lista
            //o ultimo elemento da minha lista e o next recebem o elemento
            this.tail.next=element
            this.tail=element
            this.count++
        }
    }
    print(){
        var aux = this.header
        while(aux != null){
            //apresenta o valor
            console.log(aux.element)
            //Vai para o proximo elemento se tiver
            aux = aux.next
        }
    }

}

var minhaListaEncadeada = new ListaEncadeada()

minhaListaEncadeada.add(new Nodo("Nodo 1"))
minhaListaEncadeada.print()
minhaListaEncadeada.add(new Nodo("Nodo 2"))
minhaListaEncadeada.print()