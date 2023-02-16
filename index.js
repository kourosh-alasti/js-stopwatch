window.onload = () => {
  var seconds = 00;
  var tens = 00;

  var appendMs = document.getElementById("ms");
  var appendSeconds = document.getElementById("seconds");
  var Interval;

  var btnStart = document.getElementById("start");
  var btnStop = document.getElementById("stop");
  var btnReset = document.getElementById("reset");

  btnStart.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  btnStop.onclick = () => {
    clearInterval(Interval);
  };

  btnReset.onclick = () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";

    appendMs.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  let startTimer = () => {
    tens++;

    if (tens <= 9) {
      appendMs.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendMs.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendMs.innerHTML = "0" + 0;
    }

    if (second > 9) {
      appendSeconds.innerHTML = seconds;
    }
  };
};
