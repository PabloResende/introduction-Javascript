// crie um despertador
// o despertador deve usar promise e poo

const AlarmClock = (x) => {
  return new Promise((resolve, reject) => {
    Date.now >= x
      ? resolve(console.log("Wake up"))
      : reject(console.log("zzzzz"));
  });
};

const alarm = AlarmClock(Date.now)

