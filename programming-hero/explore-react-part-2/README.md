# React - Part 2 Class Notes

---

## 📚 Topics Covered Till Now

### 1. **Components Definition**

- Reusable building blocks of React applications
- Written as JavaScript functions
- Can be composed together to build complex UIs

### 2. **JSX (JavaScript XML)**

- HTML-like syntax in JavaScript
- Makes it easier to write and visualize UI structure
- Gets compiled to React.createElement() calls

### 3. **Props (Properties)**

- Used to pass data from parent to child components
- Makes components reusable and dynamic
- Props are read-only (immutable)

**How to send props:**

```jsx
// Parent Component
<ChildComponent name="John" age={25} />;

// Child Component - receiving props
function ChildComponent({ name, age }) {
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}
```

### 4. **Conditional Rendering**

- Display different content based on conditions
- Multiple ways to implement:

**Using && operator:**

```jsx
{
  isLoggedIn && <Dashboard />;
}
```

**Using ternary operator:**

```jsx
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

**Using if-else:**

```jsx
if (isLoading) {
  return <Spinner />;
}
return <Content />;
```

---

## 🎯 State and Events

### **State**

- Internal data that a component manages
- When state changes, component re-renders
- Created using `useState` hook

**Example:**

```jsx
import { useState } from "react";

function Counter() {
  // Declare state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Key Points:**

- State is private to the component
- Never modify state directly - use setter function
- State updates trigger re-renders

---

### **Events**

- Handle user interactions (clicks, inputs, etc.)
- Event handlers are functions passed to elements
- Use camelCase naming (onClick, onChange, onSubmit)

**Common Events:**

**1. Click Event:**

```jsx
function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**2. Input Change Event:**

```jsx
function InputField() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Type something..."
    />
  );
}
```

**3. Form Submit Event:**

```jsx
function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**4. Mouse Events:**

```jsx
function Box() {
  return (
    <div
      onMouseEnter={() => console.log("Mouse entered")}
      onMouseLeave={() => console.log("Mouse left")}
    >
      Hover over me!
    </div>
  );
}
```

### **Fetch Data (API Calls)**

Fetching data is a common task in React applications. We get data from external APIs (like a backend server) and display it in our components.

#### 🔍 What is Fetching Data?

- Getting data from an external source (API)
- Usually done using the `fetch()` function
- Data comes in JSON format
- Takes time to complete (asynchronous operation)

#### 🎯 Key Concepts

**1. API (Application Programming Interface)**

- A URL that gives us data when we request it
- Example: `https://jsonplaceholder.typicode.com/users` returns a list of users

**2. async/await**

- Keywords used to handle asynchronous operations
- `async` makes a function return a Promise
- `await` pauses execution until Promise resolves

**3. Suspense**

- A React component that shows fallback content while data is loading
- Displays a loading message until the actual data arrives

**4. use() Hook**

- New React hook for reading data from Promises
- Waits for the Promise to resolve and gives us the data

---

#### 📁 Step-by-Step Implementation

**Step 1: Create the Child Component (Friend.jsx)**

This component displays a single friend's information.

```jsx
export default function Friend({ friend }) {
  // Receives one friend object as prop
  // Displays the friend's name and email
  return (
    <div className="card">
      <h4>Name: {friend.name}</h4>
      <p>Email: {friend.email}</p>
    </div>
  );
}
```

> **What it does:** Shows one friend's details in a card format

---

**Step 2: Create the Parent Component (Friends.jsx)**

This component receives a Promise and displays all friends.

```jsx
import { use } from "react";
import Friend from "./Friend";

export default function Friends({ friendsPromise }) {
  // use() hook reads the Promise and extracts the actual data
  // It waits for the fetch to complete and gives us the friends array
  const friends = use(friendsPromise);

  return (
    <div className="card">
      {/* Show total number of friends */}
      <h3>Friends: {friends.length}</h3>

      {/* Map through each friend and create a Friend component */}
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
```

> **What it does:**
>
> - Receives a Promise containing friends data
> - Unpacks the Promise using `use()` hook
> - Maps through the friends array
> - Creates a `<Friend />` component for each friend

---

**Step 3: Fetch Data in App Component (App.jsx)**

This is where we actually fetch the data from the API.

```jsx
import { Suspense } from "react";
import Friends from "./Friends";

// Async function to fetch data from API
const fetchFriends = async () => {
  // Step 1: Make request to API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // Step 2: Convert response to JSON format
  return res.json();
};

function App() {
  // Call fetchFriends() - this returns a Promise immediately
  const friendsPromise = fetchFriends();

  return (
    <>
      <h2>Vite + React</h2>

      {/* Suspense shows fallback content while data is loading */}
      <Suspense fallback={<h3>Friends are coming for the treat...</h3>}>
        {/* Pass the Promise to Friends component */}
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  );
}

export default App;
```

> **What happens here:**
>
> 1. `fetchFriends()` is called and returns a Promise
> 2. Promise is passed to `<Friends />` component
> 3. While data is loading, `<Suspense>` shows "Friends are coming for the treat..."
> 4. Once data arrives, `<Friends />` component displays the actual friends list

---

#### 🔄 Data Flow Diagram

```
API (jsonplaceholder.typicode.com)
        ↓
   fetchFriends() - Returns Promise
        ↓
   App.jsx - Passes Promise to Friends
        ↓
   <Suspense> - Shows loading message
        ↓
   Friends.jsx - use() unpacks Promise
        ↓
   Friend.jsx - Displays individual friend
```

---

#### 💡 Understanding the Process

**What is a Promise?**

- A Promise is like an "IOU" for data
- It says: "I don't have the data right now, but I will get it soon"
- When data arrives, the Promise "resolves" with the actual data

**Why use Suspense?**

- Fetching data takes time (could be 1-5 seconds)
- Without Suspense, the page would look broken while waiting
- Suspense shows a nice loading message to users

**Why use the use() hook?**

- It automatically handles Promise resolution
- Pauses component rendering until data arrives
- Works seamlessly with Suspense

---

#### 📝 Alternative: Using useState + useEffect (Traditional Way)

You might also see data fetching done this way:

```jsx
import { useState, useEffect } from "react";

function FriendsTraditional() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []); // Empty array means run once on mount

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
```

**Comparison:**

| Feature         | use() + Suspense    | useState + useEffect    |
| --------------- | ------------------- | ----------------------- |
| Code Complexity | Simpler             | More code               |
| Loading State   | Handled by Suspense | Manual state management |
| React Version   | React 19+           | All versions            |
| Best For        | New projects        | Existing projects       |

---

#### ✅ Best Practices

1. **Always add key prop** when mapping arrays
2. **Show loading states** to improve user experience
3. **Handle errors** in case the API fails
4. **Use try-catch** for error handling:

```jsx
const fetchFriends = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    console.error("Error fetching friends:", error);
    return [];
  }
};
```

---

## 💡 Putting It All Together

**Complete Example - Counter with Multiple Features:**

```jsx
import { useState } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);

  // Event handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter App</h2>

      {/* Display current count */}
      <p>Current Count: {count}</p>

      {/* Conditional styling based on count */}
      <p style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}>
        {count > 0 && "Positive number"}
        {count < 0 && "Negative number"}
        {count === 0 && "Zero"}
      </p>

      {/* Event handlers for buttons */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      {/* Conditional rendering - show warning if count too high */}
      {count > 10 && (
        <p style={{ color: "orange" }}>Warning: Count is getting high!</p>
      )}
    </div>
  );
}
```

---

## 📝 Key Takeaways

1. **State** manages dynamic data within a component
2. **Events** handle user interactions
3. Always use **setter functions** to update state
4. **event.preventDefault()** stops default browser behavior
5. Combine state, events, and conditional rendering for interactive UIs

---

## ⚠️ Common Mistakes

```jsx
// ❌ DON'T: Modify state directly
count = count + 1;

// ✅ DO: Use setter function
setCount(count + 1);
```

```jsx
// ❌ DON'T: Forget parentheses for event handlers
<button onClick={handleClick()}>  // Runs immediately!

// ✅ DO: Pass function reference
<button onClick={handleClick}>    // Runs on click
<button onClick={() => handleClick()}>  // Also correct
```
