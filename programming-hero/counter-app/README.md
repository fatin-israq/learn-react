# Counter App

A simple React counter application to practice state management and event handling.

## 🌐 Live Demo

**[View Live App](https://counter-n-api-fetch-practice.netlify.app/)**

## 📸 Screenshot

![App Screenshot](./src/assets/Screenshot%202025-12-05%20at%2023.59.48.png)

## 🚀 Features

- ➕ Increment counter by 1
- ➖ Decrement counter by 1
- 🔄 Reset counter to 0
- 👁️ Show/Hide feature with toggle button
- 📋 User list with API fetching
- 🎨 Clean and modern UI

## 🎯 Key Concepts Practiced

### State Management

```jsx
const [count, setCount] = useState(0);
```

- Managing local component state
- State updates trigger re-renders

### Event Handlers

```jsx
const handleIncrement = () => setCount(count + 1);
```

- Handling user interactions
- Passing functions as props

### Conditional Rendering

```jsx
{
  visible ? <Component /> : <AlternativeComponent />;
}
```

- Show/hide components based on state
- Ternary operators for UI logic

### Data Fetching with Suspense

```jsx
<Suspense fallback={<Loading />}>
  <Users fetchUsers={fetchUsers} />
</Suspense>
```

- Modern React data fetching with `use()` hook
- Loading states with Suspense

## 📚 What I Learned

- How `useState` returns an array `[value, setter]`
- Why we can't modify state directly (must use setter function)
- Passing functions and data as props between components
- Conditional rendering with ternary operators
- Fetching data from APIs with modern React patterns
- Using Suspense for loading states

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

**Project Type:** Learning/Practice  
**Date:** December 2025
