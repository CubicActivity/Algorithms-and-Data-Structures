// The stack data structure is a sequential collection of elements
// that follows the principle of Last In First Out (LIFO)


//Stack implementation
// push(element) - add an element to the top of the stack
// pop() - remove the top most element from the stack
// peek() - get the value of the top element without removing it
// isEmpty() - check if the stack is empty
// size() - get the number of elements in the stack
// print() - visualize the elements in the stack

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items)
    }
}

const toys = new Stack()
console.log(toys.isEmpty())
toys.push("Pikachu")
toys.push("Electobuzz")
console.log(toys.peek())
toys.print()
toys.pop()
toys.print()
console.log(toys.size())