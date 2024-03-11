/**
 * Typical methods of a stack:
 * 
 * push:        to add an element to the top of the stack.
 * pop:         to remove and return the top element of the stack.
 * peek:        to get the top element of the stack without removing it.
 * isEmpty:     to check if the stack is empty.
 * size:        to get the size of the stack.
 * clear:       to clear the stack.
 * print:       to print the stack.
 * 
*/

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {   // add an element 
        this.items.push(element);
    }

    pop() {   // remove and return the top element 
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {    // see the top element
        if (this.isEmpty()) {
            return "No elements in stack";
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {      // check if it's empty
        return this.items.length === 0;
    }

    size() {         // see the size
        return this.items.length;
    }

    clear() {        // clear
        this.items = [];
    }   

    print(){       // print 
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

let stack = new Stack();
console.log("****************");

console.log(stack.isEmpty()); 
console.log(stack.peek());
console.log(stack.size());
console.log(stack.print());

console.log("****************");

stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.isEmpty()); 

console.log(stack.print()); 

console.log(stack.peek()); 

console.log(stack.pop()); 
console.log(stack.print()); 

console.log(stack.size()); 

console.log("****************");