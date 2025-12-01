// Array of objects
const products = [
  { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
  { name: "galaxy s21", brand: "samsung", price: 8000, color: "white" },
  { name: "iphone 13", brand: "apple", price: 12000, color: "blue" },
  { name: "pixel 6", brand: "google", price: 7000, color: "green" },
  { name: "oneplus 9", brand: "oneplus", price: 6000, color: "silver" },
  { name: "note 10", brand: "xiaomi", price: 4000, color: "black" },
  { name: "galaxy a52", brand: "samsung", price: 3500, color: "purple" },
  { name: "iphone se", brand: "apple", price: 5000, color: "red" },
];

// Map
// Different array with only the prices
const result = products.map((product) => product.price);
console.log(result);

// forEach
products.forEach((product) => console.log(product));

// map returns with a newly created array, and forEach doess not.

// Filter
// Return all the phones from Apple brand
const iphones = products.filter((product) => product.brand === "apple");
console.log(iphones);

// Find
const phone = products.find((product) => product.name === "oneplus 9");
console.log(phone);
