const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Pedro" },
  { id: 1, nome: "Helena" },
];

const novaPessoa = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novaPessoa.set(id, { ...pessoa });
}

console.log(novaPessoa);
