function isUnique(string) {
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i];
    //     console.log(char, i);
    //     if (string.lastIndexOf(char) !== i ){
    //
    //         return false
    //     }
    // }
    // return true
    // const set = new Set()
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i]
    //     if (set.has(char)) {
    //         return false
    //     }
    //     set.add(char)
    //
    // }
    // return true
    return new Set(string).size === string.length


}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcdaef')) // -> false
