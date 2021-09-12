const username = document.querySelector("#username");
const welcome = document.querySelector("h1");

username.oninput = () => {
  welcome.innerHTML = `Welcome, ${username.value}`;
};
