const dice = (max, min) => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  console.log(num);
};

module.exports = { dice };