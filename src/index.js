const clockTitle = document.querySelector(".js-clock");
const clockText = document.querySelector("h3");

function handleClock() {
  const today = new Date();
  const fullYear = today.getFullYear();
  const christmas = new Date("December 25," + fullYear);

  const timeLeft = christmas.getTime() - today.getTime();
  let dayLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let day = JSON.stringify(dayLeft).padStart(2, 0);

  let hoursLeft = 23 - today.getHours();
  let hours = JSON.stringify(hoursLeft).padStart(2, 0);
  let minutesLeft = 59 - today.getMinutes();
  let minutes = JSON.stringify(minutesLeft).padStart(2, 0);
  let secondsLeft = 59 - today.getSeconds();
  let seconds = JSON.stringify(secondsLeft).padStart(2, 0);

  clockTitle.innerText = `${dayLeft}d ${hours}h ${minutes}m ${seconds}s`;

  if (dayLeft === 1) {
    clockText.innerText = `D-${day} Happy Christmas Eve!!`;
    clockText.style.color = "green";
  } else if (dayLeft === 0) {
    clockText.innerText = "Today is Christmas!! Happy Christmas!!!";
    clockText.style.color = "red";
  }
}

handleClock();
setInterval(handleClock, 1000);
