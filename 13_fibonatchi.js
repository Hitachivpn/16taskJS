// Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны n, которую передали как аргумент.

// function fibonacci(n) {
//     const arr = [1, 1]
//     if ( n < 2 ) {
//         return arr.slice(0, n)
//     }
//     while (arr.length < n ) {
//         const last = arr[arr.length - 1]
//         const prev = arr[arr.length - 2]
//         arr.push(last + prev)
//     }
//     return arr
//
// }
const fibonacci = (function (){
    const arr = [1, 1]

    return function (n) {
        console.log('Call with', n)
        if ( arr.length >= n ) {
        console.log('no compute')
        return arr.slice(0, n)
    }
        while (arr.length < n ) {
        const last = arr[arr.length - 1]
        const prev = arr[arr.length - 2]
        arr.push(last + prev)
    }
    return arr
    }
})()

console.log(fibonacci(10)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(8))
console.log(fibonacci(12))
console.log(fibonacci(4))