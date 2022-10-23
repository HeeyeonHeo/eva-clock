// app.ja

// 인터벌 함수로 시계 돌리기
setInterval(function () {
  // 시간 정보 문서 객체 (DOM) 선택
  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("min");
  const sEl = document.getElementById("sec");
  const Ampm = document.getElementById("ampm");

  // 현재 시간값 구하기
  let d = new Date(); //현재 시간 가져오기
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  if (h >= 13) {
    ampm = "PM";
    h = h - 12;
    if (h < 10) {
      h = "0" + h;
    }
  } else {
    ampm = "AM";
    if (h < 10) {
      h = "0" + h;
    }
  }

  // 시간 표시하기
  Ampm.innerHTML = ampm;
  hEl.innerText = h;
  mEl.innerText = m;
  sEl.innerText = s;
}, 1000);

// 숙제 : 시간값이 1자리일 경우 앞자리 0을 주기

setInterval(function () {
  const yEl = document.getElementById("year");
  const moEl = document.getElementById("month");
  const d1El = document.getElementById("date1");
  const dEl = document.getElementById("day");

  let today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let date = ("0" + today.getDate()).slice(-2);
  let day = today.getDay();

  if (day == 0) {
    greeting = "SUN";
  } else if (day == 1) {
    greeting = "MON";
  } else if (day == 2) {
    greeting = "TUE";
  } else if (day == 3) {
    greeting = "WED";
  } else if (day == 4) {
    greeting = "THU";
  } else if (day == 5) {
    greeting = "FRI";
  } else if (day == 6) {
    greeting = "SAT";
  } else {
    greeting = "알 수 없는 요일";
  }

  yEl.innerText = year;
  moEl.innerText = month;
  d1El.innerText = date;
  dEl.innerText = `${greeting}`;
}, 1000);