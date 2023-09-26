const dice = (max, min) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(num);
};

dice(1, 20);
