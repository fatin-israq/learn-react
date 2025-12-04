import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <Button name="+1" onClick={() => setCount(count + 1)}></Button>
      <Button name="-1" onClick={() => setCount(count - 1)}></Button>
      <Button name="Reset" onClick={() => setCount(0)}></Button>
    </>
  );
}
