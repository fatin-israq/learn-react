const person = {
  name: "Fatin Israq",
  age: 10,
  friends: ["Masum Billah"],
  salary: 500,
  10: "secret code",
  "hero-boss": "something",
};

const heroName = person["name"];
console.log(heroName);

const heroSecret = person[10]; // person.10 will give error
console.log(heroSecret);
