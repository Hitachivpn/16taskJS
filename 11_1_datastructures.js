//СТруктуры данных в JS

//Array массив
//Object объект описывается 1 объект телефон - вес. размер, модель

//Set не может содержать в себе одинаковые элементы из массива в сеи из сета в массив возможен перевод
//Map аналогия объекта
//WeakMap, WeakSet

//Linked List
// [value, next(указатель на след элемент)] -> [value, next] -> [value, next]
// [].push(42) в конец
// [1,2,3,4,5].unshift(42) в начало
// 0, 1 ,2
// в реакт используется своя кастомная структура данных для постройки Virtual DOM
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
class LinkedList {
    constructor() {
//  this.list = []
        this.head = null
        this.tail = null
    }
    append(data) {
        const node = new Node(data)

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }
    prepend(data) {
        const node = new Node(data, this.head)

        this.head = node
        if (!this.tail) {
            this.tail = node
        }

    }
    insertAfter(after, data) {
        const found = this.find(after)
        if(!found) {            return        }

        const node = new Node(data, found.next)
        found.next = node

    }
    find(data) {
        if(!this.head) {
            return
        }
        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }

    }
    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }
        return output
    }
    remove(data) {
        if (!this.head) {return}
        while (this.head && this.head.data === data ) {
            this.head = this.head.next
        }
        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                // remove
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        if (this.tail.data === data) {
            this.tail = current
        }
    }
}

const list = new LinkedList
list.prepend('Hi')
list.append('My')
list.append('name')
//list.append('is')
list.append('Sergey')
list.append('Shy')
list.insertAfter('name' , 'is')
list.prepend(42)
list.append(24)
list.remove(42)
list.remove(24)
let cor = []
cor = list.toArray()
console.log(cor)



