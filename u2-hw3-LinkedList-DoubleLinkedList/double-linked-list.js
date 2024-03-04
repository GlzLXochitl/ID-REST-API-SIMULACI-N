class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.before = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {     
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

    prepend(element) {      
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

    insertAfterNode(node, element) {   
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

    insertBeforeNode(node, element) {    //inserts a new node with a given value before an existing node with a given value in the list
        if (!node || !element) {
            return "Node and element are mandatory\n";
        }
    
        const newNode = new Node(element);
    
        if (node === this.head.data) { 
            newNode.next = this.head;
            this.head = newNode;
            return 'The element was prepended and it is the head\n';
        }
    
        let current = this.head;
        while (current.next) {
            if (current.next.data === node) {
                newNode.next = current.next;
                current.next = newNode;
                return 'The element was inserted before the specified node\n';
            }
            current = current.next;
        }
    
        return 'The node doesn´t exist\n';
    }

    traverse() {    
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

    travelReverse() {     // Display the entire current list in reverse order
        // Traverse the linked list from beginning to end, but instead of printing each node immediately, we add it to an array nodes. Then, traverse the array in reverse order and print each node.

        if (!this.head) {    // Check if the list is empty
            return "There´s no data\n";
        }

        let nodes = [];   // Create an empty array to store the nodes
        let currentValue = this.head;    // Start from the head of the list

        while (currentValue) {   // Traverse the list
            nodes.push(currentValue);   // Add the current node to the array
            currentValue = currentValue.next;    // Move to the next node
        }

        for (let i = nodes.length - 1; i >= 0; i--) {  // Traverse the array in reverse order
            console.log(nodes[i]);  // Print the node
        }
    }

    deleteNode(element) { 
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

    deleteHead(){   
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

const linkedList = new DoubleLinkedList();

console.log("\n --> ADD A NEW NODE AT THE END OF THE LIST\n");

linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(60);

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> ADD A NODE TO THE TOP OF THE LIST\n");

linkedList.prepend(10);

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> ADD A NEW NODE WITH A GIVEN VALUE AFTER AN EXISTING NODE WITH A GIVEN VALUE IN THE LIST\n");

console.log(linkedList.insertAfterNode(40, 50));   

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> ADD A NEW NODE WITH A GIVEN VALUE BEFORE AN EXISTING NODE WITH A GIVEN VALUE IN THE LIST\n");

//insertBeforeNode(node, element)
console.log(linkedList.insertBeforeNode(50, 40));    //inserta un nuevo nodo con un valor dado antes de un nodo existente con un valor dado en la lista

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> DELETES A NODE WITH A GIVEN VALUE FROM THE LIST\n");

linkedList.deleteNode(20);

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> DELETES THE FIRST NODE\n");

linkedList.deleteHead();

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> DELETES THE LAST NODE\n");

linkedList.deleteTail();

linkedList.traverse();

console.log("\n**********************************\n");
console.log(" --> SHOW THE ENTIRE CURRENT LIST IN REVERSE\n");

linkedList.travelReverse();     //Show the entire current list upside down

console.log("\n**********************************\n");






