// Function to save data to localStorage
const handleAddToStorage = () => {
  // Get the input values from the HTML form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Create an object with the collected data
  const data = { email, name };

  // This will only save the name string (not recommended for objects)
  localStorage.setItem(email, name);

  // CORRECT WAY: Convert the object to JSON string before saving
  // localStorage can only store strings, so we use JSON.stringify() to convert objects
  localStorage.setItem(email, JSON.stringify(data));

  // Log the JSON string to see what's being stored
  console.log(JSON.stringify(data));
};

// Retrieve the stored data from localStorage using the email as the key
const storedItem = localStorage.getItem(email);

// Convert the JSON string back to a JavaScript object using JSON.parse()
console.log(JSON.parse(storedItem));
