const dateNow = new Date();

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function DateFormt(dateNow) {
  const day = zeroLeft(dateNow.getDate());
  const month = zeroLeft(dateNow.getMonth() + 1);
  const year = zeroLeft(dateNow.getFullYear());
  const hour = zeroLeft(dateNow.getHours());
  const min = zeroLeft(dateNow.getMinutes());
  const seg = zeroLeft(dateNow.getSeconds());

  return `${day}/${month}/${year} ${hour}:${min}:${seg}`;
}

const DateToday = DateFormt(dateNow);
console.log(DateToday);
