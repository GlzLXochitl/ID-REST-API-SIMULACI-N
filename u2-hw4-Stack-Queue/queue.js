/**
 * Typical methods of a queue:
 * 
 * enqueue:     to add an element to the end of the queue.
 * dequeue:     to remove and return the first element of the queue.
 * front:       to get the first element of the queue without removing it.
 * isEmpty:     to check if the queue is empty.
 * size:        to get the size of the queue.
 * print:       to print the queue.
 * 
*/

class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(element) {     // add to the end
        this.items.push(element);
    }

    dequeue() {    // remove and return the first
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {      // see the first element
        if (this.isEmpty()) {
            return "No elements in queue";
        }
        return this.items[0];
    }

    isEmpty() {        // check if the queue is empty
        return this.items.length === 0;
    }

    size() {               // get the size of the queue
        return this.items.length;
    }

    print() {          // print the queue
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}



let queue = new Queue();
console.log("****************");

console.log(queue.isEmpty());
console.log(queue.front());
console.log(queue.size());
console.log(queue.print());

console.log("****************");

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.isEmpty());

console.log(queue.print());

console.log(queue.front());

queue.dequeue();
console.log(queue.print());

console.log(queue.size());

console.log("****************");