// Definimos una clase Nodo que representará cada nodo en la lista enlazada
class Nodo {
    // El constructor se llama cuando creamos una nueva instancia de Nodo
    constructor(valor) {
        // Cada nodo tiene un valor que se pasa cuando creamos el nodo
        this.valor = valor;
        // 'siguiente' es una referencia al siguiente nodo en la lista, inicialmente es null
        this.siguiente = null;
    }
}

class ListaEnlazada {
    // El constructor se llama cuando creamos una nueva instancia de ListaEnlazada
    constructor() {
        // 'cabeza' es una referencia al primer nodo en la lista, inicialmente es null
        this.cabeza = null;
    }

    agregar(valor) {
        // Creamos un nuevo nodo con el valor proporcionado
        const nuevoNodo = new Nodo(valor);
        // Si la lista está vacía (la cabeza es null), hacemos que la cabeza apunte al nuevo nodo
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            // Si la lista no está vacía, recorremos la lista hasta el último nodo
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            // Hacemos que el último nodo apunte al nuevo nodo
            actual.siguiente = nuevoNodo;
        }
    }

    imprimir() {
        // Comenzamos con la cabeza de la lista
        let actual = this.cabeza;
        // Mientras haya un nodo en la lista
        while (actual) {
            // Imprimimos el valor del nodo actual
            console.log(actual.valor);
            // Pasamos al siguiente nodo en la lista
            actual = actual.siguiente;
        }
    }
}

const lista = new ListaEnlazada();

lista.agregar(1);
lista.agregar(2);
lista.agregar(3);
lista.agregar(4);
lista.agregar(5);

lista.imprimir();