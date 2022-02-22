const el = (id) => document.getElementById(`${id}`);
const type_list = el("type");
const first_val = el("first");
const second_val = el("second");
const first_type = el("first_type");
const second_type = el("second_type");

const types = {
  mass: {
    gm: 1,
    kg: 1000,
    ton: 1000000,
    lb: 453.592,
    oz: 28.3495,
  },

  dist: {
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mile: 1609.34,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
  },
};

const updateValues = (value) => {
  if (first_type.value && second_type.value) {
    if (value) {
      second_val.value =
        (first_val.value * types[type_list.value][first_type.value]) /
        types[type_list.value][second_type.value];
      second_val.value = ~~(second_val.value * 10000) / 10000;
    } else {
      first_val.value =
        (second_val.value * types[type_list.value][second_type.value]) /
        types[type_list.value][first_type.value];
      first_val.value = ~~(first_val.value * 10000) / 10000;
    }
  }
};

const updateTypes = () => {
  first_type.innerHTML = Object.entries(types[type_list.value])
    .map(([key, value]) => `<option value="${key}">${key}</option>`)
    .join("");
  second_type.innerHTML = Object.entries(types[type_list.value])
    .map(([key, value]) => `<option value="${key}">${key}</option>`)
    .join("");
  first_val.value = 0;
  second_val.value = 0;
};

updateTypes();
