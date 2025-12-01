const person = {
  name: "Fatin Israq",
  age: 23,
  friends: ["Ena", "Borno", "Rakib"],
  country: "Bangladesh",
};

// convert object into json format
const jsonData = JSON.stringify(person);

// convert JSON into object
const jsObject = JSON.parse(jsonData);

// Fetch
// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(""));

// Object keys and values
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);
