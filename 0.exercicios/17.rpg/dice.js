function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  var result = rollD20();
  console.log("O resultado do seu dado d20 é: " + result);
