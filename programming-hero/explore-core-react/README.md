# React Fundamentals - Class Notes

## 📚 Core Concepts

### 1. **Components**

- Small, reusable units of a website
- Written as JavaScript functions
- Each component represents a specific part of the UI
- Example: Button, Navbar, Card, etc.

### 2. **JSX (JavaScript XML)**

- HTML-like syntax used in JavaScript
- Allows us to write markup directly in JS files
- Gets transpiled to regular JavaScript by Babel
- Must return a single parent element (use `<>...</>` fragments if needed)

### 3. **Props (Properties)**

- Way to pass data from parent to child components
- Passed as function parameters
- Use **destructuring** to extract values easily
- Props are **read-only** (immutable)

### 4. **Conditional Rendering**

- Show/hide components based on conditions
- Use logical operators: `&&`, ternary `? :`
- Example: `{isLoggedIn && <Dashboard />}`

---

## 🔄 Mapping Arrays to Components

### How to loop through an array and display components dynamically

#### **Step 1: Create the Child Component**

**File:** `Book.jsx`

```jsx
// Child component that receives individual book data as props
export default function Book({ book }) {
  return (
    <li>
      Name: {book.name}, Price: {book.price}
    </li>
  );
}
```

> **Note:** We're using **object destructuring** `{ book }` instead of `props.book`

---

#### **Step 2: Create the Parent Component**

**File:** `Library.jsx`

```jsx
import Book from "./Book";

function Library({ books }) {
  return (
    <div>
      <h2>My National Central Library</h2>

      {/* Display total number of books */}
      <p>Book collection: {books.length}</p>

      <p>Address: Dhaka, Bangladesh</p>

      <ul>
        {
          // Map through the books array and render a Book component for each item
          // IMPORTANT: Each child needs a unique 'key' prop for React's reconciliation
          books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))
        }
      </ul>
    </div>
  );
}

export default Library;
```

> **Key Point:** Always provide a unique `key` prop when rendering lists. This helps React identify which items have changed.

---

#### **Step 3: Setup Data in App Component**

**File:** `App.jsx`

```jsx
import Library from "./Library";

function App() {
  // Sample data: array of book objects
  const books = [
    { id: 1, name: "Physics", price: 250 },
    { id: 2, name: "Chemistry", price: 350 },
    { id: 3, name: "Biology", price: 450 },
    { id: 4, name: "Math", price: 200 },
  ];

  return (
    <>
      {/* Pass the books array as props to Library component */}
      <Library books={books}></Library>
    </>
  );
}

export default App;
```

---

## 🎯 Key Takeaways

1. **Component Hierarchy:** App → Library → Book
2. **Data Flow:** Data flows from parent to child via props (one-way data flow)
3. **Array Mapping:** Use `.map()` to render multiple components from array data
4. **Keys are Mandatory:** Always add unique `key` prop when mapping arrays
5. **Destructuring Props:** Makes code cleaner and easier to read

---

## 💡 Common Patterns

```jsx
// ✅ Good: Using destructuring
function Component({ name, price }) {
  return (
    <p>
      {name}: ${price}
    </p>
  );
}

// ❌ Avoid: Using props object
function Component(props) {
  return (
    <p>
      {props.name}: ${props.price}
    </p>
  );
}
```

```jsx
// ✅ Good: Unique key from data
books.map((book) => <Book key={book.id} book={book} />);

// ❌ Bad: Using index as key (only if no unique id available)
books.map((book, index) => <Book key={index} book={book} />);
```
