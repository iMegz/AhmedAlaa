const loaderBody = document.querySelector("#loader-body");
const loader = document.querySelector("#loader");
const loaderCount = document.querySelector("#loader-count");

const getWidth = (ele) => {
  const width = window.getComputedStyle(ele).width;
  return width.substring(0, width.length - 2);
};

const loaderBodyWidth = getWidth(loaderBody);

const inter = setInterval(() => {
  const width = ~~((getWidth(loader) / loaderBodyWidth) * 100);
  if (width > 48) {
    loaderCount.style.color = "white";
  }
  loaderCount.innerHTML = `${width}%`;
}, 100);

setTimeout(() => {
  clearInterval(inter);
  console.log("Interval stopped");
}, 12000);
