async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t1 = Date.now();
sleep(200).then(() => {
    console.log(Date.now() -t1)
})


const num1 = 10;
const num2 = 20; 
const soma = num1 + num2;

sleep(2000).then(() => {
    console.log(soma)
})