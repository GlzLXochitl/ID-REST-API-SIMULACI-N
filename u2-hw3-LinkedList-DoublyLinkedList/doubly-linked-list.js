class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {
        if (!element) {
            return "There´s no data";
        }

        const newNode = new Node(element);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return 'The element was appended and it is head and tail';
        }
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        return 'The element was appended and now it is tail'

    }

    prepend(element) {
        if (!element) {
            return "There´s no data";
        }

        const newNode = new Node(element);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return 'The element was appended and it is head and tail';

        }
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return 'The element was appended and now it is head'
    }

    insertAfterNode(node, element) {
        if (!node || !element) {
            return "Node and element are mandatory";
        }

        const newNode = new Node(element);

        let current = this.head;

        while (current) {
            if (current.data === node) {
                if (current === this.tail) {
                    return this.append(element);
                };
                newNode.next = current.next;
                newNode.previous = current;
                current.next = newNode;
                current.next.previous = newNode

                return 'The element was appended';
            }
            current = current.next;
        }
        return 'The node doesn´t exist'
    }

    insertBeforeNode(node, element) {
        if (!node || !element) {
            return "Node and element are mandatory";
        }

        const newNode = new Node(element);

        let current = this.head;

        while (current) {
            if (current.data === node) {
                if (current === this.head) {
                    return this.prepend(element);
                }
                current.previous.next = newNode;
                newNode.previous = current.previous;
                current.previous = newNode;
                newNode.next = current;
                return 'The element was appended';
            }
            current = current.next;
        }
        return 'The node doesn´t exist'
    }

    traverse() {
        if (!this.head) {
            return "There´s no data";
        }

        let currentValue = this.head;

        while (currentValue) {
            console.log(currentValue);
            currentValue = currentValue.next;
        }
        return true;
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "There´s no data";
        }
        console.log(this.head);

        if (this.head.data === element) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
                return 'Now the list is empty'
            }
            this.head = this.head.next;
            this.head.previous = null
            return 'The element was the head'
        }

        if (element === this.tail.data) {
            this.tail = this.tail.previous;
            this.tail.next = null;
            return "The element was the tail";
        }

        let current = this.head;
        while (current) {
            if (current.data === element) {
                current.previous.next = current.next;
                current.next.previous = current.previous;
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

    deleteHead(){
        if (!this.head) {
            return 'There´s no head';
        }

        this.head = this.head.next;

        if (this.head === null) {
            this.tail=null;
            return 'Now there´s no elements';
        }

        this.head.previous = null;
        return 'The head was removed';
    }

    deleteTail(){
        if (!this.head) {
            return 'There´s no data';
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return 'The tail was removed and it was also head'
        }

        this.tail = this.tail.previous;
        this.tail.next = null;
        return 'The tail was removed'
    }
}

const dll = new DoublyLinkedList();
console.log(dll.append(10));
console.log(dll.append(20));
console.log(dll.append(30));
// console.log(dll.append(20));
// console.log(dll.append(30));
// console.log(dll.prepend(7));
// console.log(dll.insertBeforeNode(7, 25))
// console.log(dll.insertAfterNode(20, 40))
console.log(dll.deleteNode(20));
console.log(dll.traverse());
// console.log(dll.deleteTail());