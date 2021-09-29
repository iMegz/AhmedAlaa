const hrDOM = document.querySelector("#hr");
const minDOM = document.querySelector("#min");
const secDOM = document.querySelector("#sec");
const amORpmDOM = document.querySelector("#amORpm");
const sep = document.querySelectorAll(".sep");

const fixNumber = (num) => (num < 10 ? `0${num}` : num);

const updateTime = () => {
  const time = new Date();

  const hr = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const amORpm = hr > 12 ? "pm" : "am";
  hrDOM.innerHTML = fixNumber(hr);
  minDOM.innerHTML = fixNumber(min);
  secDOM.innerHTML = fixNumber(sec);
  amORpmDOM.innerHTML = amORpm;
};

updateTime();
setInterval(updateTime, 1000);
setInterval(() => {
  sep.forEach(
    (ele) =>
      (ele.style.color =
        ele.style.color == "rgb(151, 151, 151)"
          ? "rgb(0, 0, 0)"
          : "rgb(151, 151, 151)")
  );
}, 500);
