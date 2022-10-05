const clock = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  hour < 10
    ? (document.querySelector(".hour").innerText = "0" + hour)
    : (document.querySelector(".hour").innerText = hour);

  minute < 10
    ? (document.querySelector(".minute").innerText = "0" + minute)
    : (document.querySelector(".minute").innerText = minute);

  second < 10
    ? (document.querySelector(".second").innerText = "0" + second)
    : (document.querySelector(".second").innerText = second);

  document.querySelector(".date").innerText = date + "/" + month + "/" + year;
};

setInterval(() => {
  clock();
}, 1000);
