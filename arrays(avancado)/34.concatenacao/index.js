const a = [1, 2, 3];
const a2 = [2, 3, 4];
const a3 = a + a2;
console.log(a3); // 1,2,32,3,4
// dessa forma só concatena os valores dentro dos arrays, o tipo muda para array

const array = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = array.concat(array2);
const array4 = array.concat(array2, [5, 6, 7], 'luiz');
console.log(array3); // [ 1, 2, 3, 2, 3, 4 ]
console.log(array4) // [1, 2, 3, 4, 5, 6, 7, 'luiz]

// ...rest (resto) -> ...spread (espalha)

const array5 = [...array, 'pedro' ,...array2, [5, 6, 7], ...[8, 9, 10]]
console.log(array5) // [ 1, 2, 3, 'pedro', 2, 3, 4, [ 5, 6, 7 ], 8, 9, 10 ]
