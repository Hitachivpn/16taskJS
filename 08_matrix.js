const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source) {
    // First rotation
    // with respect to main diagonal
    // for(let i = 0; i < source.length; ++i)
    // {
    //     for(let j = 0; j < i; ++j)
    //     {
    //         let temp = source[i][j];
    //         source[i][j] = source[j][i];
    //         source[j][i] = temp;
    //     }
    // }
    // // Second rotation
    // // with respect to middle column
    // for(let i = 0; i < source.length; ++i)
    // {
    //     for(let j = 0; j < N / 2; ++j)
    //     {
    //         let temp = source[i][j];
    //         source[i][j] = source[i][N - j - 1];
    //         source[i][N - j - 1] = temp;
    //     }
// }
const rotate = source[0].map(_ => [])

    for(let i = 0; i < source.length; i++)
        {
            for(let j = 0; j < source[i].length; j++)
            {
                rotate[j][source.length - 1 - i] =source[i][j]
            }
        }
    return rotate
}
function print(array) {
    array.forEach(i =>  console.log(i))

}
function rotate180(source) {
    return rotate(rotate(source))
    
}
function rotate270(source) {
    return rotate(rotate180(source))

}

console.log(print(matrix))
console.log(print(rotate(matrix)))
console.log('-------')
console.log(print(rotate180(matrix)))
console.log('-------')
console.log(print(rotate270(matrix)))
