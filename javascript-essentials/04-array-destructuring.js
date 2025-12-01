const friends = ["Lavlu", "Kyoshi", "Mrinal", "Mohammad"];

// const element1 = friends[0];
// const element2 = friends[1];
// const element3 = friends[2];
const [element1, element2, element3] = friends;
console.log(element1, element2, element3);

// Object Destructuring
const person = {
  name: "Fatin Israq",
  age: 23,
  friends: ["Ena", "Borno", "Rakib"],
  country: "Bangladesh",
};

const { name, country, age } = person;
console.log(name);
console.log(country);
