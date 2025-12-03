import "./App.css";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick2 = () => {
    alert("Clicked 2");
  };

  const handleAdd5 = (num) => {
    num = num + 5;
    alert(`Your result is ${num}`);
  };

  return (
    <>
      <h2>Vite + React</h2>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => handleAdd5(5)}>5 + 5</button>
    </>
  );
}

export default App;
