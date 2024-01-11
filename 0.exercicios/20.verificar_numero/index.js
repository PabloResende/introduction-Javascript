const num = -10;

if (num > 0) {
  console.log("o número é positivo");
} else if (num < 0) {
  console.log("número é negativo");
} else {
  console.log("o número é zero");
}

// or

const num2 = (n) => {
  n > 0
    ? console.log("o numero e positivo")
    : n < 0
    ? console.log("o numero e negativo")
    : console.log("o numero e zero");
};

num2(0);
