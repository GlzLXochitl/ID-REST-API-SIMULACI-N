class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null; // Agregamos una referencia al nodo anterior
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
            nuevoNodo.anterior = actual; // Actualizamos la referencia al nodo anterior
        }
    }

    imprimir() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }

    imprimirReversa() {
        let actual = this.cabeza;
        while (actual && actual.siguiente) {
            actual = actual.siguiente;
        }
        while (actual) {
            console.log(actual.valor);
            actual = actual.anterior;
        }
    }
}

const lista = new ListaEnlazada();

lista.agregar(1);
lista.agregar(2);
lista.agregar(3);
lista.agregar(4);
lista.agregar(5);

console.log("Imprimir lista normal:");
lista.imprimir();

console.log("\nImprimir lista en reversa:");
lista.imprimirReversa();
