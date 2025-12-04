import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Heading from "./Heading";
import Button from "./Button";
import List from "./List";

function App() {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <>
      <Heading
        title="Counter App"
        subtitle="Click buttons to increase or decrease the count"
      ></Heading>
      <Counter></Counter>
      {visible ? (
        <div>
          <Button onClick={hide} name="Hide"></Button>
          <List></List>
        </div>
      ) : (
        <div>
          <Button onClick={show} name="Show"></Button>
        </div>
      )}
    </>
  );
}

export default App;
