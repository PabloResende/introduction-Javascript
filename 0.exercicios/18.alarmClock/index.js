// crie um despertador
// o despertador deve usar promise e poo

const AlarmClock = (x) => {
  return new Promise((resolve, reject) => {
    Date.now >= x
      ? resolve(console.log("time to wake up"))
      : reject(console.log("zzzz"));
  });
};

const alarm = AlarmClock(Date.now);
