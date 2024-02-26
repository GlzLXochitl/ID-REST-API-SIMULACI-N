class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {     // agrega un nuevo nodo al final de la lista 
        if (!element) {
            return "There´s no data";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(element) {        //agrega un nuevo nodo al principio de la lista
        if (!element) {
            return "There´s no data";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    insertAfterNode(node, element) {    //inserta un nuevo nodo con un valor dado después de un nodo existente con un valor dado en la lista 
        if (!node || !element) {
            return "Node and element are mandatory";
        }

        const newNode = new Node(element);

        let current = this.head;
        while (current) {
            if (current.data === node) {
                newNode.next = current.next;
                current.next = newNode;
                if (current === this.tail) {
                    this.tail = newNode;
                    return 'The element was appended and it is the tail';
                };
                return 'The element was appended';
            }
            current = current.next;
        }
        return 'The node doesn´t exist'
    }

    traverse() {     //recorre la lista enlazada y imprime cada nodo en la consola. Si la lista está vacía, devuelve la cadena "There´s no data"
        if (!this.head) {
            return "There´s no data";
        }

        let currentValue = this.head;

        while (currentValue) {
            console.log(currentValue);
            currentValue = currentValue.next;
            //console.log("\n");
        }
    }

    deleteNode(element) { //elimina un nodo con un valor dado de la lista
        if (!element || !this.head) {
            return "No hay parametro o lista";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "El elemento indicado era la cabeza";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "El elemento ingresado se ha borrado y era la cola";
                }
                current.next = current.next.next;
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

    deleteHead(){    //elimina el primer nodo
        if (!this.head) {
            return 'There´s no head';
        }

        this.head = this.head.next;

        if (this.head === null) {
            this.tail=null;
        }
    }

    deleteTail() {
        if (!this.head) { 
            return 'There´s no data';
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return 'The tail was removed and it was also head';
        }

        let current = this.head;

        while (current.next) {
            if (current.next === this.tail) { 
                current.next = null;
                this.tail = current; 
                return 'The tail was removed';
            }
            current = current.next;
        }
    }

}

const linkedList = new LinkedList();


console.log("\nAGREGAR UN NUEVO NODO AL FINAL DE LA LISTA\n");

//append(element)        // agrega un nuevo nodo al final de la lista 
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(60);

//traverse()                 //recorre la lista enlazada y imprime cada nodo en la consola. Si la lista está vacía, devuelve la cadena "There´s no data"
linkedList.traverse();
console.log("\n**********************************\n");

console.log("AGREGAR UN NODO AL PRINCIPIO DE LA LISTA\n");

//prepend(element)         //agrega un nuevo nodo al principio de la lista
linkedList.prepend(10);

linkedList.traverse();
console.log("\n**********************************\n");

console.log("AGREGAR UN NUEVO NODO CON UN VALOR DADO DESPUES DE UN NODO EXISTENTE CON UN VALOR DADO EN LA LISTA\n");

//insertAfterNode(node, element)
console.log(linkedList.insertAfterNode(40, 50));    //inserta un nuevo nodo con un valor dado después de un nodo existente con un valor dado en la lista 

linkedList.traverse();
console.log("\n**********************************\n");

console.log("ELIMINA UN NODO CON UN VALOR DADO DE LA LISTA\n");

//deleteNode(element)          //elimina un nodo con un valor dado de la lista
linkedList.deleteNode(20);

linkedList.traverse();
console.log("\n**********************************\n");

console.log("ELIMINA EL PRIMER NODO\n");

//deleteHead()                //elimina el primer nodo
linkedList.deleteHead();

linkedList.traverse();
console.log("\n**********************************\n");

console.log("ELIMINA EL ULTIMO NODO\n");

//deleteTail()                //elimina el último nodo
linkedList.deleteTail();

linkedList.traverse();
console.log("\n**********************************\n");
