// The queue data structure is a sequential collection of elements
// that follow the principle of First In First Out (FIFO)

// The first element inserted into the queue is the first element to be removed
// Enqueue, adds elements on the rear/tail of the collection
// Dequeue, removes elements from the front/head of the collection

//Queue Implementation
// enqueue(element) - add an element to the queue
// dequeue() - remove the oldest element from the queue
// peek() - get the value of the element at the front of the queue without removing it
// isEmpty() - check if the queue is empty
// size() - get the number of elements in the queue
// print() - visualize the elements in the queue
class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        this.items.shift()
    }
    peek() {
        if (this.items.length != 0) {
            return this.items[0]
        }
        return null
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

const coins = new Queue()
console.log(coins.isEmpty())
coins.enqueue(10)
coins.enqueue(20)
coins.enqueue(30)
console.log(coins.peek())
coins.print()

coins.dequeue()
coins.print()
console.log(coins.size())