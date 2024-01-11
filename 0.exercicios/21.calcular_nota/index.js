function mediaAluno(x, y) {
  if (x + y >= 7) {
    console.log("Aprovado!!");
  } else {
    console.log("reprovado");
  }
}

// or

const mediaAluno2 = (x, y) =>
  x + y >= 7 ? console.log("Aprovado!") : console.log("reprovado");

mediaAluno(2, 5);
mediaAluno2(3, 1)