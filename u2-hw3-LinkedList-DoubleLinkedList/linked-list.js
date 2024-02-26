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

    append(element) {     // adds a new node to the end of the list
        if (!element) {
            return "There´s no data\n";
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

    prepend(element) {        //adds a new node to the top of the list
        if (!element) {
            return "There´s no data\n";
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

    insertAfterNode(node, element) {    //inserts a new node with a given value after an existing node with a given value in the list
        if (!node || !element) {
            return "Node and element are mandatory\n";
        }

        const newNode = new Node(element);

        let current = this.head;
        while (current) {
            if (current.data === node) {
                newNode.next = current.next;
                current.next = newNode;
                if (current === this.tail) {
                    this.tail = newNode;
                    return 'The element was appended and it is the tail\n';
                };
                return 'The element was appended\n';
            }
            current = current.next;
        }
        return 'The node doesn´t exist\n'
    }

    traverse() {     //traverses the linked list and prints each node to the console. If the list is empty, it returns the string "There's no data".
        if (!this.head) {
            return "There´s no data\n";
        }

        let currentValue = this.head;

        while (currentValue) {
            console.log(currentValue);
            currentValue = currentValue.next;
            //console.log("\n");
        }
    }

    deleteNode(element) { //deletes a node with a given value from the list
        if (!element || !this.head) {
            return "No parameter or list\n";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "The indicated element was the head\n";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "The entered item was deleted and was the queue\n";
                }
                current.next = current.next.next;
                return "Element deleted\n";
            }
            current = current.next;
        }
        return "Item not found\n";
    }

    deleteHead(){    //deletes the first node
        if (!this.head) {
            return 'There´s no head\n';
        }

        this.head = this.head.next;

        if (this.head === null) {
            this.tail=null;
        }
    }

    deleteTail() {
        if (!this.head) { 
            return 'There´s no data\n';
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return 'The tail was removed and it was also head\n';
        }

        let current = this.head;

        while (current.next) {
            if (current.next === this.tail) { 
                current.next = null;
                this.tail = current; 
                return 'The tail was removed\n';
            }
            current = current.next;
        }
    }

}

const linkedList = new LinkedList();

console.log("\n --> ADD A NEW NODE AT THE END OF THE LIST\n");

//append(element)        // adds a new node to the end of the list
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(60);

//traverse()                 //traverses the linked list and prints each node to the console. If the list is empty, it returns the string "There's no data".
linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> ADD A NODE TO THE TOP OF THE LIST\n");

//prepend(element)         //adds a new node to the top of the list
linkedList.prepend(10);

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> ADD A NEW NODE WITH A GIVEN VALUE AFTER AN EXISTING NODE WITH A GIVEN VALUE IN THE LIST\n");

//insertAfterNode(node, element)
console.log(linkedList.insertAfterNode(40, 50));    //inserts a new node with a given value after an existing node with a given value in the list

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> DELETES A NODE WITH A GIVEN VALUE FROM THE LIST\n");

//deleteNode(element)          //deletes a node with a given value from the list
linkedList.deleteNode(20);

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> DELETES THE FIRST NODE\n");

//deleteHead()                //deletes the first node
linkedList.deleteHead();

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> DELETES THE LAST NODE\n");

//deleteTail()                //deletes the last node
linkedList.deleteTail();

linkedList.traverse();

console.log("\n**********************************\n");



