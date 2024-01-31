i = 10;

return new Promise((resolve, reject) => {
  if (i === 10) {
    resolve(console.log('IS A NUMBER'));
  } else {
    reject(console.log('not a number'));
  }
});

// uma promisse dá forma mais simples o possível