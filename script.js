const countdownEnd = "2022-09-23 17:00:00";

function getRemainingTime(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function runClock(id, endTime) {
  const clock = document.getElementById(id);
  const timeInterval = setInterval(() => {
    const t = getRemainingTime(endTime);
    clock.innerHTML =
      "days: " +
      t.days +
      "<br>" +
      "hours: " +
      t.hours +
      "<br>" +
      "minutes: " +
      t.minutes +
      "<br>" +
      "seconds: " +
      t.seconds;

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

runClock("clockdiv", countdownEnd);
