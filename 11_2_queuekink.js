class LinkedList {
    #length = 0
    #head
    #tail
    addToTail(value) {
        const node = {
            value,
            next: null
        }
        if (this.#length === 0) {
            this.#head = node
            this.#tail = node
        } else {
            this.#tail = node
        }
        this.#length++
    }

    removeFromHead() {
        if (this.#length === 0) {
            return
        }
        const value = this.#head.value
        this.#head= this.#head.next
        this.#length--
        return value
    }
    size() {
        return this.#length
    }
}


class Queue extends LinkedList{
    constructor() {
        super()
        this.enqueue = this.addToTail
        this.dequeue = this.removeFromHead
        // todo
    }

    get size() {
        // todo: возвращает размер списка
        // нельзя использовать геттер
        return super.size()
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(3)
queue.enqueue(3)
console.log(queue.dequeue())

console.log(queue.size)
