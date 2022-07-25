// Создайте очередь, в которой буду реализованы операции на добавление
// элементов в конец очереди, удаление первого элемента и вычисление
// размера очереди с сложностью алгоритма
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
class Queue {
    #storage = {}
    #last = 0
    #first = 0
        // todo

    enqueue(item) {
        // todo: добавить элемент в конец очереди
        this.#storage[this.#last] = item
        this.#last++
    }

    dequeue() {
        // todo: удалить первый элемент из очереди
        if(this.size === 0) {
            return
        }
        const value = this.#storage[this.#first]
        delete this.#storage[this.#first]
        this.#first++
        return value
    }

    get size() {
        // todo: возвращает размер списка
        return this.#last-this.#first
        // нельзя использовать геттер
    }
}

const table = new Queue()
table.enqueue(1)
table.enqueue(2)
table.enqueue(42)
table.dequeue()
console.log(table.size)