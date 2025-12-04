# Counter App

A simple React counter application to practice state management and event handling.

## 📚 What I Learned

- Using `useState` hook for state management
- Passing props between components
- Handling click events
- Component composition and reusability

## 🚀 Features

- ➕ Increment counter by 1
- ➖ Decrement counter by 1
- 🔄 Reset counter to 0
- 🎨 Clean and simple UI

## 🛠️ Tech Stack

- React 18+
- Vite
- JavaScript (ES6+)


## 🎯 Key Concepts Practiced

### State Management

```jsx
const [count, setCount] = useState(0);
```

- State is managed in the `Counter` component
- Updates trigger re-renders

### Event Handlers

```jsx
const handleIncrement = () => setCount(count + 1);
```

- Functions passed as props to child components
- Handle user interactions

### Component Props

```jsx
<Button name="+1" onClick={handleIncrement} />
```

- Data flows from parent to child
- Makes components reusable

## 🎓 Learning Notes

This project helped me understand:

- How `useState` returns an array `[value, setter]`
- Why we can't modify state directly (must use setter function)
- How to pass functions as props for event handling
- The importance of component composition


---

**Project Type:** Practice/Learning  
**Date:** December 2025
