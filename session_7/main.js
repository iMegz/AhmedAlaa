const addBtn = document.querySelector("#add");
const todo = document.querySelector("#todo");
const todoesList = document.querySelector("#todoes");

const done = [];
const todoes = [];
addBtn.onclick = () => {
  todoes.push({
    text: todo.value,
    id: Date.now().toString(36),
  });

  refresh();
};

const isDone = (id) => {
  done.push(id);
  refresh();
};
// eat,7, drink,8
// [5 ,6 ,7]

const refresh = () => {
  todoes.sort((a, b) => {
    let i = 0;
    while (a.text.charCodeAt(i) == b.text.charCodeAt(i)) {
      i++;
    }
    return a.text.charCodeAt(i) - b.text.charCodeAt(i);
  });
  todoesList.innerHTML = todoes
    .filter((value) => done.findIndex((id) => id == value.id) == -1)
    .map(
      ({ text: value, id }) =>
        `<li onclick="isDone('${id}')">${value} | ${id}</li>`
    )
    .join("");
};

/*
forEach
every
some
filter
map
findIndex
sort
reduce

milestones 1 : 

sort => for max and min
map => for display
reduce => for total average
max is green min is red


milestones 2 : 

unique IDS 
random names and gender
every => got +25 in all subjects
filter => table 1 and two
*/
