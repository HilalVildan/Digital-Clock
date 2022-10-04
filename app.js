function renderTime() {
  const currentTime = new Date();
  let dilim = "AM";
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();


  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    dilim = "PM";
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  const myClock = document.getElementById("clock");
  myClock.textContent = h + ":" + m + ":" + s + " " + dilim;
  setTimeout("renderTime()", 1000);
}
renderTime();
