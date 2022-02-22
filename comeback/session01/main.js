/*
1) Var, Let, Const
2) Function, Arrow function
3) Callback function
4) Higher order functions 
    - forEach
    - map
    - every, some
    - sort
    - find, findIndex
    - filter
    - reduce
5) Template strings

input
ul / ol => li
*/
// const arr = [1, 5, 2];
// const arr2 = [
//     { id: 0, name: "ahmed" },
//     { id: 1, name: "ali" },
//     { id: 2, name: "mohamed" },
//     { id: 3, name: "hosam" },
// ];
// arr.forEach((value) => {
//     console.log(value);
// });
// const newArr = arr.map((value) => value * 2);
// console.log(newArr);

// const bool = arr.some((value) => value > 6);
// const bool2 = arr.every((value) => value > 6);

// const bool3 = arr.find((value) => value > 6);
// const i = arr.findIndex((value) => value == 5);

// const newArr = arr2.sort((a, b) => a.id - b.id);

// const newArr = arr.filter((value) => value > 5);
// const x = "ahmed";
// <label> ahmed </label>

// const y = "<label> " + x + "</label>";
// const z = `<label> ${x} </label>`;
// const cb = (value, acc) => acc + value;
// const result = arr.reduce(cb, 2);
// console.log(result);
// const slider = document.getElementById("slider");
const slider = document.querySelector("#slider");
// slider.onclick = () => {
//     console.log("clicked");
// };
slider.onchange = (e) => {
    console.log(e.srcElement.value);
};
slider.oninput = (e) => {
    console.log(e.srcElement.value);
};
