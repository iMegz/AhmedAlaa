const arr = ["ahmed", "ali", "Kareem", "hosam", "alaa", "hend"];
const arr2 = [20, 15, 6, 30, 10, 5];

// const arr2 = arr.forEach((value) => {
//   console.log(value);
// });

// const arr3 = arr.map((value) => {
//   return `hello ${value}, welcome to our website`;
// });

// const isEvery = arr.every((value) => value != "hosam");

// const isSome = arr.some((value) => value != "alaa");

// const filtered = arr.filter((value) => value[0] == "a");
const arr3 = arr.map((name, index) => {
  const age = arr2[index];
  return { name, age };
});

arr3.sort((a, b) => a.age - b.age);
console.log(arr3);
