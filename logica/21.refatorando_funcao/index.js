// o objetivo é refatorar uma função que recebe dois números e retorna o maior:

function max(x, y) {
  if (x > y) return x;
  else {
    return y;
  }
}

const maior = max(10, 20);
console.log(maior);

// ou...

function max2(x, y) {
  if (x > y) return x;
  return y;
}

console.log(max2(30, 20));

// ou...

function max3(x, y) {
  return x > y ? x : y;
}

console.log(max3(10, 15));

// ou...

const max4 = (x, y) => (x > y ? x : y);
console.log(max4(24, 42));
