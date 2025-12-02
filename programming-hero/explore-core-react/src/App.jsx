import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Core Concepts</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Revise JavaScript" isDone={true}></Todo>
      <Todo task="Take a shower" isDone={true}></Todo>

      <ReactSetupMessage></ReactSetupMessage>
    </>
  );
}

function ReactSetupMessage() {
  return <h3>React has been set up successfully</h3>;
}

export default App;
