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
