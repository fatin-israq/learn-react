import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Heading from "./Heading";

function App() {
  return (
    <>
      <Heading
        title="Counter App"
        subtitle="Click buttons to increase or decrease the count"
      ></Heading>
      <Counter></Counter>
    </>
  );
}

export default App;
