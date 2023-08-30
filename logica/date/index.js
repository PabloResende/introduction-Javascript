const data = new Date();
console.log(data.toString());
// Wed Aug 30 2023 10:55:43 GMT-0300 (Brasilia Standard Time)

const marcoZero = new Date(0);
console.log(marcoZero.toString());
// Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time)

const tresHoras = 60 * 60 * 3 * 1000; //calculo para 3 horas
const data2 = new Date(0 + tresHoras);
console.log(data2.toString());
// Thu Jan 01 1970 00:00:00 GMT-0300 (Brasilia Standard Time)
// momento exato do marco zero

const minimoData = new Date(2023, 8, 30, 11, 15, 59, 999); //ano, mês, dia, hora, minuto, secundo e milésimo
console.log(minimoData.toString());
// Sat Sep 30 2023 11:15:59 GMT-0300 (Brasilia Standard Time)

// o mês é contado do 0, então pro javascript o ano tem 11 meses

const dataString = new Date("2023-04-20 20:20:59.999");
console.log(dataString.toString());
// Thu Apr 20 2023 20:20:59 GMT-0300 (Brasilia Standard Time)

const DataDia = new Date("2023-04-02 20:15:59.10.100");
console.log("Dia mês", data.getDate()); // Dia mês 30
console.log("Mês", data.getMonth()); // Mês 7
console.log("Ano", data.getFullYear()); // ano 2023
console.log("Hora", data.getHours()); // Hora 14
console.log("Min", data.getMinutes()); // Min 15
console.log("Seg", data.getSeconds()); // Seg 42
console.log("Ms", data.getMilliseconds()); // Ms 192
console.log("Dia semana", data.getDay()); //dia semana 3
console.log(Date.now()); //1693415742199 é a contagem do marco zero até hoje em milesegundos
console.log(data.toString()); //Wed Aug 30 2023 14:15:42 GMT-0300 (Brasilia Standard Time)

const DataMarcoHoje = new Date(1693415742199);
console.log(DataMarcoHoje.toString()); //Wed Aug 30 2023 14:15:42 GMT-0300 (Brasilia Standard Time) (data atual desse código)

function zeroAesquerda(num) {
  return num >= 10 ? num : `0${num}`;
} //function para adicioanar um zero a esquerda dos números

function formataData(data) {
  const dia = zeroAesquerda(data.getDate());
  const mes = zeroAesquerda(data.getMonth() + 1); // +1 para que o mês fique correto
  const ano = zeroAesquerda(data.getFullYear());
  const hora = zeroAesquerda(data.getHours());
  const min = zeroAesquerda(data.getMinutes());
  const seg = zeroAesquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil); // 30/08/2023 14:32:33
