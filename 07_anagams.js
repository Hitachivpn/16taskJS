function allAnagrams(array) {
   const sorted = array.map(str => str.split('').sort().join(''))
    //   массив sorted результат которого равен исходному массиву array
    //   но его преобразуем map на каждой итерации str и временно привели к массиву split sort и снова в массив join
    console.log(sorted)
    for (let i=1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) {
            return false
        }
    }
    return true



}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false